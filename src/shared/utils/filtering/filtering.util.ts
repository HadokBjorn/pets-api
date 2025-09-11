import { TextCasingMode, TextSearchMode } from "@/shared/enums/filtering.enum";

class FilteringUtil {
  text(
    field: string,
    value?: string,
    mode: TextSearchMode = TextSearchMode.Contains,
    casingMode: TextCasingMode = TextCasingMode.Insensitive
  ) {
    if (!value) {
      return {};
    }

    if (mode === TextSearchMode.Exact) {
      return { [field]: { equals: value } };
    }

    return { [field]: { [mode]: value, mode: casingMode } };
  }

  date(field: string, value?: { equals?: Date; min?: Date; max?: Date }) {
    if (!value) return {};

    const filter: any = {};

    if (value.equals) {
      filter.equals = value.equals;
    }

    if (value.min) {
      filter.gte = value.min;
    }

    if (value.max) {
      filter.lte = value.max;
    }

    if (Object.keys(filter).length === 0) {
      return {};
    }

    return { [field]: filter };
  }

  int(
    field: string,
    value?: { equals?: number; in?: number[]; notIn?: number[] }
  ) {
    if (!value) return {};

    const filter: any = {};

    if (value.equals !== undefined && !isNaN(value.equals)) {
      filter.equals = value.equals;
    }

    if (Array.isArray(value.in) && value.in.length > 0) {
      filter.in = value.in.filter((v) => !isNaN(v));
    }

    if (Array.isArray(value.notIn) && value.notIn.length > 0) {
      filter.notIn = value.notIn.filter((v) => !isNaN(v));
    }

    if (Object.keys(filter).length === 0) {
      return {};
    }

    return { [field]: filter };
  }

  array<T = unknown>(field: string, value?: { in?: T[]; notIn?: T[] }) {
    if (!value) return {};

    const filter: any = {};

    if (Array.isArray(value.in) && value.in.length > 0) {
      filter.in = value.in;
    }

    if (Array.isArray(value.notIn) && value.notIn.length > 0) {
      filter.notIn = value.notIn;
    }

    if (Object.keys(filter).length === 0) {
      return {};
    }

    return { [field]: filter };
  }

  relationSome(field: string, value?: Record<string, any>) {
    if (!value || Object.keys(value).length === 0) {
      return {};
    }

    return {
      [field]: {
        some: value,
      },
    };
  }
}

export default new FilteringUtil();
