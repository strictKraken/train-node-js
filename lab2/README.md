### Goals

- Without framework crate http server

### Requirements

- support (POST,GET,OPTION) for one route
- support content type (json, xml,formdate, urlencode )
- handle graceful shutdown

### Route implementation

#### Folder structure:

```
routes
├── [id]
├── [slug]
├── route1
│   └── index.ts
├── route2
└── route3
    └── route3.3
```

**exported function:**  
GET  
POST  
DELETE  
PUT  
OPTIONS

**Create modal routes and connect it to url**  
#### **Help**
- node fs
- node path
