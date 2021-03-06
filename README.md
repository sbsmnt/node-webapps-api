# node / express API

node API with mockup data to use in some of the demo webapps.

### Currently used by this apps:

- [Partners Management App](https://bitbucket.org/tiagoeira/partners-mgmnt);

---

## Endpoints

### API SVAPP

API endpoints to feed the [Partners Management App](https://bitbucket.org/tiagoeira/partners-mgmnt) with mock data to represent the real production application backend.

This endpoint uses **JWT** for authentication management.

---

## Login

To login make a `POST` request to `https://node.tiagoeira.com/svapp/login`.

The Body of the request must have a JSON object with `user` and `password` fields.

---

### Success

If the login is successful, the api should return a response with status code `200` and a JSON object with user details.

The response `token` field should be used to authenticate other requests made to the API.

The token must be sent in `Authorization`header with the value: `Bearer <token value>`.

---

## Get all Partners.

To get all affiliated partners, you should make a `GET` request to `https://node.tiagoeira.com/svapp/partners`.

The request must have an `Authorization` header with the token obtained in the login response.

Ex.:

```
[ 
    { 
        "key":"Authorization", 
        "value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlckBtYWlsLmNvbSIsImlhdCI6MTYwMjY3MTQ4MSwiZXhwIjoxNjAyNjc1MDgxfQ.5aZWxbEi1q8ClgvMVha80DnRqmlJbaKO_RN7v4iCHgI", 
    }
 ]
```

---

### Success

If the request is successful it should return with status code `200` and a JSON array of objects with each partner details.

Ex.:

```
[
    {
        "users_register_date": "2020-05-02 11:07:14",
        "nid": "1008",
        "users_node_uid": "7356",
        "verified": "0",
        "field_commission_agents_users_uid": "4778",
        "users_node_mail": "random591@outlook.com",
        "address_postal_code": "2910616",
        "address_local": "setubal",
        "address_street": "rua moinho 30 02f",
        "node_created_date": "1600855687",
        "field_accept_date": "2020-05-02 11:08:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "27",
        "category_name": "Barber Shop",
        "company_name": "Caique Santos",
        "full_name": "Mayan Barber Shop",
        "phone_number": "933452343",
        "user_owner": "Wenna McCarthy",
        "manager": "Chris Grey",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
]
```

---

### Error

The most common error will be if the request doesn't have a valid authorization token, then it should return with status code `401` and a JSON object with an `error` field and the error message as value.

Ex.:

```
{
    "error": "jwt expired"
}
```

---

## Get all created Partner Pages.

To get all affiliated partners, you should make a `GET` request to `https://node.tiagoeira.com/svapp/partner-pages`.

The request must have an `Authorization` header with the token obtained in the login response.

Ex.:

```
[ 
    { 
        "key":"Authorization", 
        "value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlckBtYWlsLmNvbSIsImlhdCI6MTYwMjY3MTQ4MSwiZXhwIjoxNjAyNjc1MDgxfQ.5aZWxbEi1q8ClgvMVha80DnRqmlJbaKO_RN7v4iCHgI", 
    }
 ]
```

---

### Success

If the request is successful it should return with status code `200` and a JSON array of objects with the partner page details.

* The `url` field is the last section of the partner page url: `partner-name`, the rest of the url should be the same for all partners, for example: `https://lp.companyname.com`/`partner-name`
* The `qr_code` field is the url to the QR code image generated.
  ( Not in use on partners management app, it is generated by another service so that partners could print stickers with their own code )
* The `qr_image` field is the QR code image encoded in Base64 format.

Example of usage:

```
<img src={ `data:image/png;base64,${qr_image}` } />
```

* The rest of the fields are self explanatory (`uid` = user id).

Success response example:

```
[
    {
        "id": "1",
        "uid": "2054",
        "name": "Randall Group",
        "url": "randall-group",
        "qr_code": "https://clientlp.companyname.com/qr-randall-group.png",
        "qr_image": "iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoAQMAAABAK/OWAAAABlBMVEX///8AAABVwtN+AAACb0lEQVR4nO2aMY6DQAxFjVJQcoQcZY42HI2jcARKiijesb89QLRbbEcsW4oiJo9p+LH9zRD9KypbbO1iZHq+2vfD1t5UdqIn98ukb02veKZlG3hpdCPljio3T29ssAOZko5FPyCIDUuN5LY008DzxLpBo0Ulc9JB6UGWNB006YhOqkhHNkg6Nk1aCCRDEHSisScdlj5qA8vyy9qAN+oDdPJbJUn6y2m2sK7Aa4P85EuOJH1v+hyFNdPLD7M96rLTX5H0d9PVFCCk/Oc1+b902TP+OvZ2P+k4tBZ1aeK9kf/w82yuDt1A0nFo7fC0r4d5l3AJYbhzUVXSgWgUAQ/tCo5CsJBdPrRcJB2H9iieDiw5aCEYQI9aLijpYDQyxOLNn/n5yWqDGD30hNUqSdL3pfGIkfH1EfuT1//8yD0FbJR0NHrStC6hPz35cxJ/yfZJh6Cr5HFLB512Czd4nZcPPGDSUWgJHda5KPi3SbxuYLUh6SC0iaLAwsG4HxuRZQiXTtJhaPfzCw0XnUx43Sb94Dry4QGTvi+NOGYz4tDZZzN9HnvO9knHoGv79g6vMKZynu036vNYy/ZJR6Jt7A7N+Dv0mczAY0TbpZN0IPqkkx2NPPt7V/apXN8g6XC0xGJjm5Or81DqnXQg+ojjSM3qru6SIZKORVdXgp2PNVenG039jbsewbCBbtK3pVc8d3HoZSe4OjKasQEKAHs/mHQQ+nTKHU08ZGPDutFkdO7tkw5HH67uHCvZEbqkw9KnU+4bRjdF8J0uE7+kg9BeGwbv7QXwdzCLnZtZkw5HWxpg04ndXBkGvng/aNPbpMPQ/4ofiu+wzH6yxEsAAAAASUVORK5CYII=",
        "active": "1",
        "created": "2020-06-15 13:57:54",
        "updated": "2020-06-15 13:57:54"
    },
]
```

---

### Error

The most common error will be if the request doesn't have a valid authorization token, then it should return with status code `401` and a JSON object with an `error` field and the error message as value.

Ex.:

```
{
    "error": "jwt expired"
}
```

---

## Get Partners Top 5

Get all partners (or cities) Top 5 by lead count:

- **All time** - Ranking of partners with highest lead count of all time;
- **Last 30 Days** - Ranking of partners with the highest lead count of the last 30 days;
- **Local** - Ranking of cities with the the highest lead count of all time;


To the top partners, you should make a `GET` request to `https://node.tiagoeira.com/svapp/top-all`.

The request must have an `Authorization` header with the token obtained in the login response.

Ex.:

```
[ 
    { 
        "key":"Authorization", 
        "value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlckBtYWlsLmNvbSIsImlhdCI6MTYwMjY3MTQ4MSwiZXhwIjoxNjAyNjc1MDgxfQ.5aZWxbEi1q8ClgvMVha80DnRqmlJbaKO_RN7v4iCHgI", 
    }
 ]
```

---

### Success

If the request is successful it should return with status code `200` and a JSON object with the rankings.

Exemple response:

```
{
    "alltime": [
        {
            "name": "Randall Group",
            "phone": "913566784",
            "company": "Randall Group",
            "category": "Pharmacy",
            "lead_nr": "158"
        }, 
        (...)
    ],
    "month": [
        {
            "name": "Dr. Mary Oh",
            "phone": "913566784",
            "company": "Randall Group",
            "category": "Pharmacy",
            "lead_nr": "28"
        },
        (...)
    ],
    "local": [
        {
            "name": "Lisboa",
            "lead_nr": 414
        },   
        (...)
     ]
}
```

---

### Error

The most common error will be if the request doesn't have a valid authorization token, then it should return with status code `401` and a JSON object with an `error` field and the error message as value.

Ex.:

```
{
    "error": "jwt expired"
}
```

---

For a Postman Docs version, see
[https://documenter.getpostman.com/view/4389872/TVRoYmhz](https://documenter.getpostman.com/view/4389872/TVRoYmhz)

