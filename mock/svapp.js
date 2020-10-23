const usersList = [
    { 
        "username": "user@mail.com",
        "password": "$2b$07$yGSSveGczyjEmAbc3psqIev8wY634P0XbQH9eHBKCZpBn0AtUbizG",
    }
];

const userData = [{
    "sessid": "BSqa4Lz3aLxnGTLjRiw6prjvuhWaCNlpt8artDgFViU",
    "session_name": "SESSe9d5e67a9cf2b5655890631d8fdeab98",
    "token": "6GOF-AqxhmWN3mnoP4_RltAhi-6gxnoWIel9Kr70siY",
    "user": {
        "uid": "5219",
        "name": "user@mail.com",
        "full_name": "Jules Dudley",
        "company_name" : "TE",
        "mail": "user@mail.com",
        "created": "1576604813",
        "login": 1600873774,
        "status": "1",
        "timezone": "Europe/Lisbon",
        "language": "pt-pt",
        "picture": "0",
        "uuid": "cb5f4f60-b35f-4ec3-9c6b-0ddec3f3654f",
        "roles": {
            "2": "authenticated user",
            "5": "Commission agent"
        },
        "commission_agent_category": "29",
        "phone_number": "969999999",
        "phone_country_code": "351",
        "address": {
            "country": "PT",
            "locality": "Lisbon",
            "postal_code": "1999-999",
            "thoroughfare": "Rua da Pharmacy"
        },
        "picture": [],
        "commission_agents": [],
        "customers_raised": [],
        "field_points": "0",
        "field_points_date": {
            "value": "2020-07-09 00:00:00",
            "timezone": "Europe/Lisbon",
            "timezone_db": "Europe/Lisbon",
            "date_type": "datetime"
        },
        "field_verified": { "value": "1" }
    }
}];

const topAllTime = [
    {
        "name": "Randall Group",
        "phone": "913566784",
        "company": "Randall Group",
        "category": "Pharmacy",
        "lead_nr": "158"
    },
    {
        "name": "Isaac Oaktree",
        "phone": "968374657",
        "company": "Barbarian Call",
        "category": "Barber Shop",
        "lead_nr": "48"
    },
    {
        "name": "Dr. Barbara Zav",
        "phone": "915333345",
        "company": "Clean Clean Clean",
        "category": "Pharmacy",
        "lead_nr": "40"
    },
    {
        "name": "Evan Olsson",
        "phone": "960400545",
        "company": "Gym Klub",
        "category": "Gym",
        "lead_nr": "37"
    },
    {
        "name": "Dr. John Drawer",
        "phone": "9153464354",
        "company": "The Clean Mile",
        "category": "Pharmacy",
        "lead_nr": "32"
    }
];

const topMonth = [
    {
        "name": "Dr. Mary Oh",
        "phone": "913566784",
        "company": "Randall Group",
        "category": "Pharmacy",
        "lead_nr": "28"
    },
    {
        "name": "Isaac Oaktree",
        "phone": "968374657",
        "company": "Barbarian Call",
        "category": "Barber Shop",
        "lead_nr": "17"
    },
    {
        "name": "James Noris",
        "phone": "969374834",
        "company": "Barber Schmarber",
        "category": "Barber Shop",
        "lead_nr": "13"
    },
    {
        "name": "Marc Platt",
        "phone": "938010737",
        "company": "Marc Platt Barber Shop",
        "category": "Barber Shop",
        "lead_nr": "10"
    },
    {
        "name": "Gemma Grey",
        "phone": "915345676",
        "company": "Lit Hairdresser",
        "category": "Hairdresser",
        "lead_nr": "9"
    }
];

const topLocal = [
    {
        "name": "Lisboa",
        "lead_nr": 414
    },
    {
        "name": "Faro",
        "lead_nr": 181
    },
    {
        "name": "Porto",
        "lead_nr": 100
    },
    {
        "name": "Braga",
        "lead_nr": 79
    },
    {
        "name": "Évora",
        "lead_nr": 79
    }
];

const partnersData = [
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
    {
        "users_register_date": "2020-03-23 10:42:31",
        "nid": "1006",
        "users_node_uid": "7355",
        "verified": "0",
        "field_commission_agents_users_uid": "2298",
        "users_node_mail": "mrhairstyle@gmail.com",
        "address_postal_code": "4590606",
        "address_local": "Paços de Ferreira",
        "address_street": "rua padre Ramiro das Neves n8",
        "node_created_date": "1600854995",
        "field_accept_date": "2020-03-23 10:56:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "27",
        "category_name": "Barber Shop",
        "company_name": "Mr Barbershop",
        "full_name": "Harold Meadows",
        "phone_number": "910432322",
        "user_owner": "Angie Gedfrey",
        "manager": "Angie Gedfrey ",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-23 10:30:32",
        "nid": "11994",
        "users_node_uid": "7353",
        "verified": "0",
        "field_commission_agents_users_uid": "4778",
        "users_node_mail": "Zoeb@outlook.com",
        "address_postal_code": "2950330",
        "address_local": "Aires",
        "address_street": "rua Manuel Machado de Oliveira lt 1",
        "node_created_date": "1600853493",
        "field_accept_date": "2020-09-23 10:31:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "27",
        "category_name": "Barber Shop",
        "company_name": "Cuthbert Shop",
        "full_name": "Zoe Blunder",
        "phone_number": "934534343",
        "user_owner": "Wenna McCarthy",
        "manager": "Chris Grey",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-23 10:29:34",
        "nid": "11989",
        "users_node_uid": "7352",
        "verified": "0",
        "field_commission_agents_users_uid": "4778",
        "users_node_mail": "gui.rock98@outlook.com",
        "address_postal_code": "2900-446",
        "address_local": "Setúbal",
        "address_street": "rua luis de Camões n200",
        "node_created_date": "1600853401",
        "field_accept_date": "2020-09-23 10:29:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "27",
        "category_name": "Barber Shop",
        "company_name": "Barb Pitt",
        "full_name": "Guilherme Rocha",
        "phone_number": "934336771",
        "user_owner": "Wenna McCarthy",
        "manager": "Chris Grey",
        "leads_nr": {
            "valid": 1,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-23 10:29:08",
        "nid": "11986",
        "users_node_uid": "7351",
        "verified": "0",
        "field_commission_agents_users_uid": "1078",
        "users_node_mail": "bel.amber@hotmail.fr",
        "address_postal_code": "8125-448",
        "address_local": "Vilamoura",
        "address_street": "centro comercial marina luxor loja 22",
        "node_created_date": "1600853391",
        "field_accept_date": "2020-09-23 10:29:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "3",
        "category_name": "Hairdresser",
        "company_name": "Bel Hair",
        "full_name": "Bel Amber",
        "phone_number": "916812343",
        "user_owner": "Alice Pigeon",
        "manager": "Alice Pigeon",
        "leads_nr": {
            "valid": 1,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2019-10-15 18:14:00",
        "nid": "43941",
        "users_node_uid": "3514",
        "verified": "1",
        "field_commission_agents_users_uid": "3512",
        "users_node_mail": "rmnshh@gmail.com",
        "address_postal_code": "4470057",
        "address_local": "Maia",
        "address_street": "Rua do Ultramar n5",
        "node_created_date": "1600792217",
        "field_accept_date": "2020-09-22 17:30:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "43",
        "category_name": "Pharmacy",
        "company_name": "Fastfarma",
        "full_name": "Andreia Walker",
        "phone_number": "934823234",
        "user_owner": "Fastfarma",
        "manager": "Anna Gloop",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-22 15:57:15",
        "nid": "43935",
        "users_node_uid": "7349",
        "verified": "0",
        "field_commission_agents_users_uid": "1244",
        "users_node_mail": "ben.pt@gmail.com",
        "address_postal_code": "2750-161",
        "address_local": "cascais",
        "address_street": "rua das flores, 15, 1f",
        "node_created_date": "1600786896",
        "field_accept_date": "2020-09-22 16:01:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "45",
        "category_name": "Personal Trainer",
        "company_name": "Fitness Factory",
        "full_name": "Ben Walker",
        "phone_number": "916355434",
        "user_owner": "Daniel Rabbit",
        "manager": "Daniel Rabbit",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-22 16:00:10",
        "nid": "43934",
        "users_node_uid": "7350",
        "verified": "0",
        "field_commission_agents_users_uid": "1244",
        "users_node_mail": "melbes@gmail.com",
        "address_postal_code": "2835-750",
        "address_local": "barreiro",
        "address_street": "rua das acacias, n 3, 1f",
        "node_created_date": "1600786852",
        "field_accept_date": "2020-09-22 16:00:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "45",
        "category_name": "Personal Trainer",
        "company_name": "Fitness Factory",
        "full_name": "Mel Ball",
        "phone_number": "912661345",
        "user_owner": "Daniel Rabbit",
        "manager": "Daniel Rabbit",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-21 15:47:43",
        "nid": "43923",
        "users_node_uid": "7340",
        "verified": "1",
        "field_commission_agents_users_uid": "5269",
        "users_node_mail": "brigits@gmail.com",
        "address_postal_code": "4400-318",
        "address_local": "Vila Nova de Gaia",
        "address_street": "rua do outono, n33",
        "node_created_date": "1600785790",
        "field_accept_date": "2020-09-22 15:43:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "43",
        "category_name": "Pharmacy",
        "company_name": "Pharmacy Bond",
        "full_name": "Dra. Brigite Ruano",
        "phone_number": "963112223",
        "user_owner": "Pharmacy Bond",
        "manager": "Anna Gloop",
        "leads_nr": {
            "valid": 0,
            "invalid": 1
        }
    },
    {
        "users_register_date": "2020-09-21 16:46:37",
        "nid": "43830",
        "users_node_uid": "7343",
        "verified": "0",
        "field_commission_agents_users_uid": "7341",
        "users_node_mail": "kuik_67@hotmail.com",
        "address_postal_code": "8900-450",
        "address_local": "Monte Gordo",
        "address_street": "rua do pirata, n55",
        "node_created_date": "1600703230",
        "field_accept_date": "2020-09-21 16:46:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "27",
        "category_name": "Barber Shop",
        "company_name": "WISMEN SALON ",
        "full_name": "Luis Torrance",
        "phone_number": "969541164",
        "user_owner": "Denis Pereira",
        "manager": "Alice Pigeon",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-21 16:33:10",
        "nid": "43827",
        "users_node_uid": "7342",
        "verified": "0",
        "field_commission_agents_users_uid": "3156",
        "users_node_mail": "pharmacy_smith@hotmail.com",
        "address_postal_code": "3670",
        "address_local": "vouzela",
        "address_street": "rua conselheiro morais Carvalho 1",
        "node_created_date": "1600702428",
        "field_accept_date": "2020-09-21 16:33:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "43",
        "category_name": "Pharmacy",
        "company_name": "Pharmacy Smith",
        "full_name": "Carole Play",
        "phone_number": "919915222",
        "user_owner": "Anna Gloop",
        "manager": "Anna Gloop",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-21 16:31:11",
        "nid": "43826",
        "users_node_uid": "7341",
        "verified": "0",
        "field_commission_agents_users_uid": "1078",
        "users_node_mail": "mohgod@hotmail.com",
        "address_postal_code": "8950-056",
        "address_local": "Azinhal - Castro Marim",
        "address_street": "Urbanização Poço dos Peixes Lote 22",
        "node_created_date": "1600702411",
        "field_accept_date": "2020-09-21 16:33:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "27",
        "category_name": "Barber Shop",
        "company_name": "WISMEN SALON",
        "full_name": "Mohammad Godfrey",
        "phone_number": "969299433",
        "user_owner": "Alice Pigeon",
        "manager": "Alice Pigeon",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-21 15:36:17",
        "nid": "43820",
        "users_node_uid": "7339",
        "verified": "0",
        "field_commission_agents_users_uid": "7337",
        "users_node_mail": "m.j.h@sapo.pt",
        "address_postal_code": "3660468",
        "address_local": "São Pedro do sul",
        "address_street": "rua da caravela, n345",
        "node_created_date": "1600699017",
        "field_accept_date": "2020-09-21 15:36:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "43",
        "category_name": "Pharmacy",
        "company_name": "Pharmacy Handy",
        "full_name": "Mary Jane Smith",
        "phone_number": "933466234",
        "user_owner": "Dr Helen Torrance",
        "manager": "Anna Gloop",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-21 15:22:35",
        "nid": "43815",
        "users_node_uid": "7338",
        "verified": "0",
        "field_commission_agents_users_uid": "7337",
        "users_node_mail": "angela_t@live.com.pt",
        "address_postal_code": "3670-269",
        "address_local": "Vouzela",
        "address_street": "Vouzela",
        "node_created_date": "1600698206",
        "field_accept_date": "2020-09-21 15:23:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "43",
        "category_name": "Pharmacy",
        "company_name": "Pharmacy Handy",
        "full_name": "Kate Tavares",
        "phone_number": "964793765",
        "user_owner": "Dr Helen Torrance",
        "manager": "Anna Gloop",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-21 15:02:58",
        "nid": "43809",
        "users_node_uid": "7337",
        "verified": "0",
        "field_commission_agents_users_uid": "3156",
        "users_node_mail": "olmvbp@live.com.pt",
        "address_postal_code": "3670-230",
        "address_local": "Vouzela",
        "address_street": "Largo da Feira 5",
        "node_created_date": "1600697034",
        "field_accept_date": "2020-09-21 15:03:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "43",
        "category_name": "Pharmacy",
        "company_name": "Pharmacy Handy",
        "full_name": "Dr Helen Torrance",
        "phone_number": "919456548",
        "user_owner": "Anna Gloop",
        "manager": "Anna Gloop",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-21 09:17:34",
        "nid": "43775",
        "users_node_uid": "7332",
        "verified": "0",
        "field_commission_agents_users_uid": "7075",
        "users_node_mail": "jess_nol@yahoo.com",
        "address_postal_code": "3730-099",
        "address_local": "vale de cambra",
        "address_street": "av. eng ilidio pinho,129",
        "node_created_date": "1600678345",
        "field_accept_date": "2020-09-21 09:52:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "43",
        "category_name": "Pharmacy",
        "company_name": "Pharmacy Malkovich",
        "full_name": "Jessica Nolan",
        "phone_number": "919262655",
        "user_owner": "Pharmacy Malkovich",
        "manager": "Anna Gloop",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-17 13:01:16",
        "nid": "43559",
        "users_node_uid": "7325",
        "verified": "1",
        "field_commission_agents_users_uid": "1244",
        "users_node_mail": "salles34@gmail.com",
        "address_postal_code": "2845-583",
        "address_local": "amora",
        "address_street": "Av 1 Maio, loja 1001",
        "node_created_date": "1600344155",
        "field_accept_date": "2020-09-17 13:02:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "45",
        "category_name": "Personal Trainer",
        "company_name": "Dan Salles",
        "full_name": "Dan Salles",
        "phone_number": "916622324",
        "user_owner": "Daniel Rabbit",
        "manager": "Daniel Rabbit",
        "leads_nr": {
            "valid": 0,
            "invalid": 0
        }
    },
    {
        "users_register_date": "2020-09-17 12:05:10",
        "nid": "43538",
        "users_node_uid": "7324",
        "verified": "1",
        "field_commission_agents_users_uid": "3141",
        "users_node_mail": "daneng@gmail.com",
        "address_postal_code": "1150-246",
        "address_local": "lisboa",
        "address_street": "rua rainha n6 2f",
        "node_created_date": "1600340739",
        "field_accept_date": "2020-09-17 12:05:00",
        "field_contract_status": "Accepted",
        "field_commission_agent_category": "46",
        "category_name": "Personal Trainer",
        "company_name": "Dan Fit ",
        "full_name": "Dan Cornwall",
        "phone_number": "967870232",
        "user_owner": "Daniel Rabbit",
        "manager": "Daniel Rabbit",
        "leads_nr": {
            "valid": 0,
            "invalid": 1
        }
    }
];

const partnerPages = [
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
    {
        "id": "3",
        "uid": "7351",
        "name": "Bel Hair",
        "url": "bel-hair",
        "qr_code": "https://clientlp.companyname.com/qr-bel-hair.png",
        "qr_image": "iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoAQMAAABAK/OWAAAABlBMVEX///8AAABVwtN+AAACe0lEQVR4nO2bO66EMAxFjaagZAkshaXB0lgKS5iSAuEX+9oJvE/xOsaypdGIcCZNbvxLhuhfNrPZuzz0TONRvl82dtK0E41cH5N+NL1hTad3x2uhizEfNMuPhxMT7ECGpGPRLwjijaGiE5HEQh0vA+sEhdahpIPSnQypOyjSEZ3MIh2ZIOnYNGkgKHFBPqITtT3psHSLDbxrXEAacCI+QCe/RZKkP5xmM8sKJDYU6agofMiRpJ9NX21i9fTyYrGlnnb6y5L+bHo2BQgpe16d/6HD7vE3yEdDf9KB6APlm5dwh/2iTgJvj2wg6Ti0pnMDXmo9/2qiQHPnqpOk49Ce4RFZCXfcAkEZ4s3mpKRD0Yx67VrPew8PE4hONOVPOhgtKYDFBjd3GpoPak2v5Jn0o+nbK6w6Mx51z/eMPU/fYkPSn0+Llc09VNeODX7rxLu3TzoWLS0b6+TUqu7q7fFxnSQdg57ZU7rasGsn7uydeM3tvQZMOgjNqhG2ozaxEUmfmnkIr+qSDkQjEKyuk8PKuA4p/665favqkn42PfPl9oQowXsztR979fZJx6EJ2Z0bTt9Yr89NzD9iQ9Ix6KIAPWaz5iujP7OQFfD97fpc0pFoXJJZcQajcWG0OO+FXt8mSDoYTX5jSqu6zQs+uzXFmGQ4kw5EN+tQwrG6BLK23sVDJB2Lnl0Jficetfxih/ATsgKVj9eAST+V3rDuNbc/yA/PsPq28hBC0pHodst97W8nqXZLEmYnqUnHpCGPdmMKtlmhl3RYmvFHhprIo57HibvHhqTj0BDH5A07T+egkdXuzVSdJB2GZjN4iBoEyqO8njwf9O5t0lHof9kXEKbUdOaN0WEAAAAASUVORK5CYII=",
        "active": "1",
        "created": "2020-06-15 13:57:54",
        "updated": "2020-06-15 13:57:54"
    },
];

module.exports = { 
    userData: userData,
    userList: usersList, 
    topAllTime: topAllTime, 
    topMonth: topMonth, 
    topLocal: topLocal, 
    partnersData: partnersData,
    partnerPages: partnerPages
}