# Pets-api

// Endpoints principais
GET /pets  
GET /pets/:id  
POST /pets  
PUT /pets/:id  
DELETE /pets/:id  
GET /pets/search  
GET /pets/stats
  
POST /pets/:id/adopt

GET /users  => OK
POST /users  => /auth/signup
GET /users/:id  => OK
PUT /users/:id  => OK
DELETE /users/:id => OK

```
interface Pet {
id: number;
name: string;
species: 'dog' | 'cat'
breed: string;
age: number; // em meses
gender: 'male' | 'female';
status: 'available' | 'pending' | 'adopted';
location: {
city: string;
};
photos: string[]; // URLs das fotos

createdAt: string; // ISO date
updatedAt: string; // ISO date
adoptedAt?: string; // ISO date
adoptedBy?: User ID (opcional)
}
```