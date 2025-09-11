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

GET /users  
POST /users  
GET /users/:id  
PUT /users/:id  
DELETE /users/:id

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