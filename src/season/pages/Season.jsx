import { useState } from "react";
import { useSeasonStore } from "../../hooks/useSeasonStore"
import { useRacesStore } from "../../hooks/useRacesStore";
import { Race } from "../../race/pages/Race";

const races = [
        {
            "id": 1857,
            "competition": {
                "id": 2,
                "name": "Bahrain Grand Prix",
                "location": {
                    "country": "Bahrain",
                    "city": "Sakhir"
                }
            },
            "circuit": {
                "id": 2,
                "name": "Bahrain International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/2.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 57
            },
            "fastest_lap": {
                "driver": {
                    "id": 25
                },
                "time": "1:32.608"
            },
            "distance": "308.5 Kms",
            "timezone": "utc",
            "date": "2024-03-02T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1858,
            "competition": {
                "id": 2,
                "name": "Bahrain Grand Prix",
                "location": {
                    "country": "Bahrain",
                    "city": "Sakhir"
                }
            },
            "circuit": {
                "id": 2,
                "name": "Bahrain International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/2.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-01T16:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1859,
            "competition": {
                "id": 2,
                "name": "Bahrain Grand Prix",
                "location": {
                    "country": "Bahrain",
                    "city": "Sakhir"
                }
            },
            "circuit": {
                "id": 2,
                "name": "Bahrain International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/2.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-01T12:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1860,
            "competition": {
                "id": 2,
                "name": "Bahrain Grand Prix",
                "location": {
                    "country": "Bahrain",
                    "city": "Sakhir"
                }
            },
            "circuit": {
                "id": 2,
                "name": "Bahrain International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/2.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-02-29T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1861,
            "competition": {
                "id": 2,
                "name": "Bahrain Grand Prix",
                "location": {
                    "country": "Bahrain",
                    "city": "Sakhir"
                }
            },
            "circuit": {
                "id": 2,
                "name": "Bahrain International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/2.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-02-29T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1862,
            "competition": {
                "id": 32,
                "name": "Saudi Arabia Grand Prix",
                "location": {
                    "country": "Saudi Arabia",
                    "city": "Djeddah"
                }
            },
            "circuit": {
                "id": 29,
                "name": "Jeddah Corniche Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/29.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 50
            },
            "fastest_lap": {
                "driver": {
                    "id": 34
                },
                "time": "1:31.632"
            },
            "distance": "308.7 Kms",
            "timezone": "utc",
            "date": "2024-03-09T17:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1863,
            "competition": {
                "id": 32,
                "name": "Saudi Arabia Grand Prix",
                "location": {
                    "country": "Saudi Arabia",
                    "city": "Djeddah"
                }
            },
            "circuit": {
                "id": 29,
                "name": "Jeddah Corniche Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/29.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-08T17:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1864,
            "competition": {
                "id": 32,
                "name": "Saudi Arabia Grand Prix",
                "location": {
                    "country": "Saudi Arabia",
                    "city": "Djeddah"
                }
            },
            "circuit": {
                "id": 29,
                "name": "Jeddah Corniche Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/29.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-08T13:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1865,
            "competition": {
                "id": 32,
                "name": "Saudi Arabia Grand Prix",
                "location": {
                    "country": "Saudi Arabia",
                    "city": "Djeddah"
                }
            },
            "circuit": {
                "id": 29,
                "name": "Jeddah Corniche Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/29.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-07T17:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1866,
            "competition": {
                "id": 32,
                "name": "Saudi Arabia Grand Prix",
                "location": {
                    "country": "Saudi Arabia",
                    "city": "Djeddah"
                }
            },
            "circuit": {
                "id": 29,
                "name": "Jeddah Corniche Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/29.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-07T13:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1867,
            "competition": {
                "id": 1,
                "name": "Australia Grand Prix",
                "location": {
                    "country": "Australia",
                    "city": "Melbourne"
                }
            },
            "circuit": {
                "id": 1,
                "name": "Albert Park Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/1.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 58
            },
            "fastest_lap": {
                "driver": {
                    "id": 34
                },
                "time": "1:19.813"
            },
            "distance": "306.1 Kms",
            "timezone": "utc",
            "date": "2024-03-24T04:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1868,
            "competition": {
                "id": 1,
                "name": "Australia Grand Prix",
                "location": {
                    "country": "Australia",
                    "city": "Melbourne"
                }
            },
            "circuit": {
                "id": 1,
                "name": "Albert Park Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/1.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-23T05:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1869,
            "competition": {
                "id": 1,
                "name": "Australia Grand Prix",
                "location": {
                    "country": "Australia",
                    "city": "Melbourne"
                }
            },
            "circuit": {
                "id": 1,
                "name": "Albert Park Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/1.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-23T01:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1870,
            "competition": {
                "id": 1,
                "name": "Australia Grand Prix",
                "location": {
                    "country": "Australia",
                    "city": "Melbourne"
                }
            },
            "circuit": {
                "id": 1,
                "name": "Albert Park Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/1.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-22T05:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1871,
            "competition": {
                "id": 1,
                "name": "Australia Grand Prix",
                "location": {
                    "country": "Australia",
                    "city": "Melbourne"
                }
            },
            "circuit": {
                "id": 1,
                "name": "Albert Park Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/1.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-22T01:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1872,
            "competition": {
                "id": 19,
                "name": "Japan Grand Prix",
                "location": {
                    "country": "Japan",
                    "city": "Suzuka"
                }
            },
            "circuit": {
                "id": 19,
                "name": "Suzuka International Racing Course",
                "image": "https://media.api-sports.io/formula-1/circuits/19.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 53
            },
            "fastest_lap": {
                "driver": {
                    "id": 25
                },
                "time": "1:33.706"
            },
            "distance": "307.8 Kms",
            "timezone": "utc",
            "date": "2024-04-07T05:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1873,
            "competition": {
                "id": 19,
                "name": "Japan Grand Prix",
                "location": {
                    "country": "Japan",
                    "city": "Suzuka"
                }
            },
            "circuit": {
                "id": 19,
                "name": "Suzuka International Racing Course",
                "image": "https://media.api-sports.io/formula-1/circuits/19.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-06T06:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1874,
            "competition": {
                "id": 19,
                "name": "Japan Grand Prix",
                "location": {
                    "country": "Japan",
                    "city": "Suzuka"
                }
            },
            "circuit": {
                "id": 19,
                "name": "Suzuka International Racing Course",
                "image": "https://media.api-sports.io/formula-1/circuits/19.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-06T02:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1875,
            "competition": {
                "id": 19,
                "name": "Japan Grand Prix",
                "location": {
                    "country": "Japan",
                    "city": "Suzuka"
                }
            },
            "circuit": {
                "id": 19,
                "name": "Suzuka International Racing Course",
                "image": "https://media.api-sports.io/formula-1/circuits/19.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-05T06:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1876,
            "competition": {
                "id": 19,
                "name": "Japan Grand Prix",
                "location": {
                    "country": "Japan",
                    "city": "Suzuka"
                }
            },
            "circuit": {
                "id": 19,
                "name": "Suzuka International Racing Course",
                "image": "https://media.api-sports.io/formula-1/circuits/19.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-05T02:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1877,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 56
            },
            "fastest_lap": {
                "driver": {
                    "id": 4
                },
                "time": "1:37.810"
            },
            "distance": "305.3 Kms",
            "timezone": "utc",
            "date": "2024-04-21T07:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1879,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-20T08:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1880,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-20T07:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1881,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-19T03:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1882,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 57
            },
            "fastest_lap": {
                "driver": {
                    "id": 97
                },
                "time": "1:30.634"
            },
            "distance": "307.6 Kms",
            "timezone": "utc",
            "date": "2024-05-05T20:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1883,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-04T20:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1884,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-04T20:43:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1885,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-04T20:23:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1886,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-03T16:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1887,
            "competition": {
                "id": 29,
                "name": "Emilia Romagna Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Imola"
                }
            },
            "circuit": {
                "id": 27,
                "name": "Autodromo Enzo e Dino Ferrari",
                "image": "https://media.api-sports.io/formula-1/circuits/27.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 63
            },
            "fastest_lap": {
                "driver": {
                    "id": 51
                },
                "time": "1:18.589"
            },
            "distance": "309.3 Kms",
            "timezone": "utc",
            "date": "2024-05-19T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1888,
            "competition": {
                "id": 29,
                "name": "Emilia Romagna Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Imola"
                }
            },
            "circuit": {
                "id": 27,
                "name": "Autodromo Enzo e Dino Ferrari",
                "image": "https://media.api-sports.io/formula-1/circuits/27.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-18T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1889,
            "competition": {
                "id": 29,
                "name": "Emilia Romagna Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Imola"
                }
            },
            "circuit": {
                "id": 27,
                "name": "Autodromo Enzo e Dino Ferrari",
                "image": "https://media.api-sports.io/formula-1/circuits/27.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-17T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1890,
            "competition": {
                "id": 29,
                "name": "Emilia Romagna Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Imola"
                }
            },
            "circuit": {
                "id": 27,
                "name": "Autodromo Enzo e Dino Ferrari",
                "image": "https://media.api-sports.io/formula-1/circuits/27.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-18T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1891,
            "competition": {
                "id": 29,
                "name": "Emilia Romagna Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Imola"
                }
            },
            "circuit": {
                "id": 27,
                "name": "Autodromo Enzo e Dino Ferrari",
                "image": "https://media.api-sports.io/formula-1/circuits/27.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-17T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1892,
            "competition": {
                "id": 7,
                "name": "Monaco Grand Prix",
                "location": {
                    "country": "Monaco",
                    "city": "Monte-Carlo"
                }
            },
            "circuit": {
                "id": 7,
                "name": "Circuit de Monaco",
                "image": "https://media.api-sports.io/formula-1/circuits/7.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 78
            },
            "fastest_lap": {
                "driver": {
                    "id": 20
                },
                "time": "1:14.165"
            },
            "distance": "260.3 Kms",
            "timezone": "utc",
            "date": "2024-05-26T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1893,
            "competition": {
                "id": 7,
                "name": "Monaco Grand Prix",
                "location": {
                    "country": "Monaco",
                    "city": "Monte-Carlo"
                }
            },
            "circuit": {
                "id": 7,
                "name": "Circuit de Monaco",
                "image": "https://media.api-sports.io/formula-1/circuits/7.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-25T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1894,
            "competition": {
                "id": 7,
                "name": "Monaco Grand Prix",
                "location": {
                    "country": "Monaco",
                    "city": "Monte-Carlo"
                }
            },
            "circuit": {
                "id": 7,
                "name": "Circuit de Monaco",
                "image": "https://media.api-sports.io/formula-1/circuits/7.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-25T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1895,
            "competition": {
                "id": 7,
                "name": "Monaco Grand Prix",
                "location": {
                    "country": "Monaco",
                    "city": "Monte-Carlo"
                }
            },
            "circuit": {
                "id": 7,
                "name": "Circuit de Monaco",
                "image": "https://media.api-sports.io/formula-1/circuits/7.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-24T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1896,
            "competition": {
                "id": 7,
                "name": "Monaco Grand Prix",
                "location": {
                    "country": "Monaco",
                    "city": "Monte-Carlo"
                }
            },
            "circuit": {
                "id": 7,
                "name": "Circuit de Monaco",
                "image": "https://media.api-sports.io/formula-1/circuits/7.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-24T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1897,
            "competition": {
                "id": 9,
                "name": "Canada Grand Prix",
                "location": {
                    "country": "Canada",
                    "city": "Montréal"
                }
            },
            "circuit": {
                "id": 9,
                "name": "Circuit Gilles-Villeneuve",
                "image": "https://media.api-sports.io/formula-1/circuits/9.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 70
            },
            "fastest_lap": {
                "driver": {
                    "id": 20
                },
                "time": "1:14.856"
            },
            "distance": "305.3 Kms",
            "timezone": "utc",
            "date": "2024-06-09T18:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1898,
            "competition": {
                "id": 9,
                "name": "Canada Grand Prix",
                "location": {
                    "country": "Canada",
                    "city": "Montréal"
                }
            },
            "circuit": {
                "id": 9,
                "name": "Circuit Gilles-Villeneuve",
                "image": "https://media.api-sports.io/formula-1/circuits/9.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-08T20:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1899,
            "competition": {
                "id": 9,
                "name": "Canada Grand Prix",
                "location": {
                    "country": "Canada",
                    "city": "Montréal"
                }
            },
            "circuit": {
                "id": 9,
                "name": "Circuit Gilles-Villeneuve",
                "image": "https://media.api-sports.io/formula-1/circuits/9.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-08T16:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1900,
            "competition": {
                "id": 9,
                "name": "Canada Grand Prix",
                "location": {
                    "country": "Canada",
                    "city": "Montréal"
                }
            },
            "circuit": {
                "id": 9,
                "name": "Circuit Gilles-Villeneuve",
                "image": "https://media.api-sports.io/formula-1/circuits/9.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-07T21:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1901,
            "competition": {
                "id": 9,
                "name": "Canada Grand Prix",
                "location": {
                    "country": "Canada",
                    "city": "Montréal"
                }
            },
            "circuit": {
                "id": 9,
                "name": "Circuit Gilles-Villeneuve",
                "image": "https://media.api-sports.io/formula-1/circuits/9.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-07T17:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1902,
            "competition": {
                "id": 6,
                "name": "Spain Grand Prix",
                "location": {
                    "country": "Spain",
                    "city": "Montmeló"
                }
            },
            "circuit": {
                "id": 6,
                "name": "Circuit de Barcelona-Catalunya",
                "image": "https://media.api-sports.io/formula-1/circuits/6.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 66
            },
            "fastest_lap": {
                "driver": {
                    "id": 49
                },
                "time": "1:17.115"
            },
            "distance": "307.4 Kms",
            "timezone": "utc",
            "date": "2024-06-23T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1903,
            "competition": {
                "id": 6,
                "name": "Spain Grand Prix",
                "location": {
                    "country": "Spain",
                    "city": "Montmeló"
                }
            },
            "circuit": {
                "id": 6,
                "name": "Circuit de Barcelona-Catalunya",
                "image": "https://media.api-sports.io/formula-1/circuits/6.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-22T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1904,
            "competition": {
                "id": 6,
                "name": "Spain Grand Prix",
                "location": {
                    "country": "Spain",
                    "city": "Montmeló"
                }
            },
            "circuit": {
                "id": 6,
                "name": "Circuit de Barcelona-Catalunya",
                "image": "https://media.api-sports.io/formula-1/circuits/6.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-22T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1905,
            "competition": {
                "id": 6,
                "name": "Spain Grand Prix",
                "location": {
                    "country": "Spain",
                    "city": "Montmeló"
                }
            },
            "circuit": {
                "id": 6,
                "name": "Circuit de Barcelona-Catalunya",
                "image": "https://media.api-sports.io/formula-1/circuits/6.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-21T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1906,
            "competition": {
                "id": 6,
                "name": "Spain Grand Prix",
                "location": {
                    "country": "Spain",
                    "city": "Montmeló"
                }
            },
            "circuit": {
                "id": 6,
                "name": "Circuit de Barcelona-Catalunya",
                "image": "https://media.api-sports.io/formula-1/circuits/6.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-21T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1907,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 71
            },
            "fastest_lap": {
                "driver": {
                    "id": 4
                },
                "time": "1:07.694"
            },
            "distance": "308.7 Kms",
            "timezone": "utc",
            "date": "2024-06-30T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1908,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "Sprint",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-29T10:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1909,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-29T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1910,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-29T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1911,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-28T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1912,
            "competition": {
                "id": 12,
                "name": "Great Britain Grand Prix",
                "location": {
                    "country": "United Kingdom",
                    "city": "Silverstone Northamptonshire"
                }
            },
            "circuit": {
                "id": 12,
                "name": "Silverstone Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/12.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 52
            },
            "fastest_lap": {
                "driver": {
                    "id": 24
                },
                "time": "1:28.293"
            },
            "distance": "306.8 Kms",
            "timezone": "utc",
            "date": "2024-07-07T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1913,
            "competition": {
                "id": 12,
                "name": "Great Britain Grand Prix",
                "location": {
                    "country": "United Kingdom",
                    "city": "Silverstone Northamptonshire"
                }
            },
            "circuit": {
                "id": 12,
                "name": "Silverstone Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/12.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-06T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1914,
            "competition": {
                "id": 12,
                "name": "Great Britain Grand Prix",
                "location": {
                    "country": "United Kingdom",
                    "city": "Silverstone Northamptonshire"
                }
            },
            "circuit": {
                "id": 12,
                "name": "Silverstone Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/12.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-06T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1915,
            "competition": {
                "id": 12,
                "name": "Great Britain Grand Prix",
                "location": {
                    "country": "United Kingdom",
                    "city": "Silverstone Northamptonshire"
                }
            },
            "circuit": {
                "id": 12,
                "name": "Silverstone Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/12.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-05T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1916,
            "competition": {
                "id": 12,
                "name": "Great Britain Grand Prix",
                "location": {
                    "country": "United Kingdom",
                    "city": "Silverstone Northamptonshire"
                }
            },
            "circuit": {
                "id": 12,
                "name": "Silverstone Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/12.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-05T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1917,
            "competition": {
                "id": 14,
                "name": "Hungary Grand Prix",
                "location": {
                    "country": "Hungary",
                    "city": "Mogyoród"
                }
            },
            "circuit": {
                "id": 14,
                "name": "Hungaroring",
                "image": "https://media.api-sports.io/formula-1/circuits/14.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 70
            },
            "fastest_lap": {
                "driver": {
                    "id": 51
                },
                "time": "1:20.305"
            },
            "distance": "306.7 Kms",
            "timezone": "utc",
            "date": "2024-07-21T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1918,
            "competition": {
                "id": 14,
                "name": "Hungary Grand Prix",
                "location": {
                    "country": "Hungary",
                    "city": "Mogyoród"
                }
            },
            "circuit": {
                "id": 14,
                "name": "Hungaroring",
                "image": "https://media.api-sports.io/formula-1/circuits/14.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-20T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1919,
            "competition": {
                "id": 14,
                "name": "Hungary Grand Prix",
                "location": {
                    "country": "Hungary",
                    "city": "Mogyoród"
                }
            },
            "circuit": {
                "id": 14,
                "name": "Hungaroring",
                "image": "https://media.api-sports.io/formula-1/circuits/14.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-20T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1920,
            "competition": {
                "id": 14,
                "name": "Hungary Grand Prix",
                "location": {
                    "country": "Hungary",
                    "city": "Mogyoród"
                }
            },
            "circuit": {
                "id": 14,
                "name": "Hungaroring",
                "image": "https://media.api-sports.io/formula-1/circuits/14.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-19T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1921,
            "competition": {
                "id": 14,
                "name": "Hungary Grand Prix",
                "location": {
                    "country": "Hungary",
                    "city": "Mogyoród"
                }
            },
            "circuit": {
                "id": 14,
                "name": "Hungaroring",
                "image": "https://media.api-sports.io/formula-1/circuits/14.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-19T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1922,
            "competition": {
                "id": 15,
                "name": "Belgium Grand Prix",
                "location": {
                    "country": "Belgium",
                    "city": "Francorchamps"
                }
            },
            "circuit": {
                "id": 15,
                "name": "Circuit de Spa-Francorchamps",
                "image": "https://media.api-sports.io/formula-1/circuits/15.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 44
            },
            "fastest_lap": {
                "driver": {
                    "id": 10
                },
                "time": "1:44.701"
            },
            "distance": "308.2 Kms",
            "timezone": "utc",
            "date": "2024-07-28T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1923,
            "competition": {
                "id": 15,
                "name": "Belgium Grand Prix",
                "location": {
                    "country": "Belgium",
                    "city": "Francorchamps"
                }
            },
            "circuit": {
                "id": 15,
                "name": "Circuit de Spa-Francorchamps",
                "image": "https://media.api-sports.io/formula-1/circuits/15.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-27T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1924,
            "competition": {
                "id": 15,
                "name": "Belgium Grand Prix",
                "location": {
                    "country": "Belgium",
                    "city": "Francorchamps"
                }
            },
            "circuit": {
                "id": 15,
                "name": "Circuit de Spa-Francorchamps",
                "image": "https://media.api-sports.io/formula-1/circuits/15.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-27T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1925,
            "competition": {
                "id": 15,
                "name": "Belgium Grand Prix",
                "location": {
                    "country": "Belgium",
                    "city": "Francorchamps"
                }
            },
            "circuit": {
                "id": 15,
                "name": "Circuit de Spa-Francorchamps",
                "image": "https://media.api-sports.io/formula-1/circuits/15.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-26T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1926,
            "competition": {
                "id": 15,
                "name": "Belgium Grand Prix",
                "location": {
                    "country": "Belgium",
                    "city": "Francorchamps"
                }
            },
            "circuit": {
                "id": 15,
                "name": "Circuit de Spa-Francorchamps",
                "image": "https://media.api-sports.io/formula-1/circuits/15.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-26T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1927,
            "competition": {
                "id": 5,
                "name": "Netherlands Grand Prix",
                "location": {
                    "country": "Netherlands",
                    "city": "Zandvoort"
                }
            },
            "circuit": {
                "id": 5,
                "name": "Circuit Zandvoort",
                "image": "https://media.api-sports.io/formula-1/circuits/5.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 72
            },
            "fastest_lap": {
                "driver": {
                    "id": 49
                },
                "time": "1:13.817"
            },
            "distance": "306.6 Kms",
            "timezone": "utc",
            "date": "2024-08-25T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1928,
            "competition": {
                "id": 5,
                "name": "Netherlands Grand Prix",
                "location": {
                    "country": "Netherlands",
                    "city": "Zandvoort"
                }
            },
            "circuit": {
                "id": 5,
                "name": "Circuit Zandvoort",
                "image": "https://media.api-sports.io/formula-1/circuits/5.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-24T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1929,
            "competition": {
                "id": 5,
                "name": "Netherlands Grand Prix",
                "location": {
                    "country": "Netherlands",
                    "city": "Zandvoort"
                }
            },
            "circuit": {
                "id": 5,
                "name": "Circuit Zandvoort",
                "image": "https://media.api-sports.io/formula-1/circuits/5.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-24T09:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1930,
            "competition": {
                "id": 5,
                "name": "Netherlands Grand Prix",
                "location": {
                    "country": "Netherlands",
                    "city": "Zandvoort"
                }
            },
            "circuit": {
                "id": 5,
                "name": "Circuit Zandvoort",
                "image": "https://media.api-sports.io/formula-1/circuits/5.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-23T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1931,
            "competition": {
                "id": 5,
                "name": "Netherlands Grand Prix",
                "location": {
                    "country": "Netherlands",
                    "city": "Zandvoort"
                }
            },
            "circuit": {
                "id": 5,
                "name": "Circuit Zandvoort",
                "image": "https://media.api-sports.io/formula-1/circuits/5.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-23T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1932,
            "competition": {
                "id": 16,
                "name": "Italy Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Monza"
                }
            },
            "circuit": {
                "id": 16,
                "name": "Autodromo Nazionale Monza",
                "image": "https://media.api-sports.io/formula-1/circuits/16.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 53
            },
            "fastest_lap": {
                "driver": {
                    "id": 49
                },
                "time": "1:21.432"
            },
            "distance": "307.0 Kms",
            "timezone": "utc",
            "date": "2024-09-01T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1933,
            "competition": {
                "id": 16,
                "name": "Italy Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Monza"
                }
            },
            "circuit": {
                "id": 16,
                "name": "Autodromo Nazionale Monza",
                "image": "https://media.api-sports.io/formula-1/circuits/16.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-31T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1934,
            "competition": {
                "id": 16,
                "name": "Italy Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Monza"
                }
            },
            "circuit": {
                "id": 16,
                "name": "Autodromo Nazionale Monza",
                "image": "https://media.api-sports.io/formula-1/circuits/16.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-31T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1935,
            "competition": {
                "id": 16,
                "name": "Italy Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Monza"
                }
            },
            "circuit": {
                "id": 16,
                "name": "Autodromo Nazionale Monza",
                "image": "https://media.api-sports.io/formula-1/circuits/16.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-30T15:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1936,
            "competition": {
                "id": 16,
                "name": "Italy Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Monza"
                }
            },
            "circuit": {
                "id": 16,
                "name": "Autodromo Nazionale Monza",
                "image": "https://media.api-sports.io/formula-1/circuits/16.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-30T11:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1937,
            "competition": {
                "id": 8,
                "name": "Azerbaijan Grand Prix",
                "location": {
                    "country": "Azerbaijan",
                    "city": "Bakou"
                }
            },
            "circuit": {
                "id": 8,
                "name": "Baku City Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/8.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 51
            },
            "fastest_lap": {
                "driver": {
                    "id": 49
                },
                "time": "1:45.255"
            },
            "distance": "306.2 Kms",
            "timezone": "utc",
            "date": "2024-09-15T11:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1938,
            "competition": {
                "id": 8,
                "name": "Azerbaijan Grand Prix",
                "location": {
                    "country": "Azerbaijan",
                    "city": "Bakou"
                }
            },
            "circuit": {
                "id": 8,
                "name": "Baku City Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/8.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-14T12:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1939,
            "competition": {
                "id": 8,
                "name": "Azerbaijan Grand Prix",
                "location": {
                    "country": "Azerbaijan",
                    "city": "Bakou"
                }
            },
            "circuit": {
                "id": 8,
                "name": "Baku City Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/8.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-14T12:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1940,
            "competition": {
                "id": 8,
                "name": "Azerbaijan Grand Prix",
                "location": {
                    "country": "Azerbaijan",
                    "city": "Bakou"
                }
            },
            "circuit": {
                "id": 8,
                "name": "Baku City Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/8.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-14T12:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1941,
            "competition": {
                "id": 8,
                "name": "Azerbaijan Grand Prix",
                "location": {
                    "country": "Azerbaijan",
                    "city": "Bakou"
                }
            },
            "circuit": {
                "id": 8,
                "name": "Baku City Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/8.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-13T09:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1942,
            "competition": {
                "id": 17,
                "name": "Singapore Grand Prix",
                "location": {
                    "country": "Singapore",
                    "city": "Singapour"
                }
            },
            "circuit": {
                "id": 17,
                "name": "Marina Bay Street Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/17.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 62
            },
            "fastest_lap": {
                "driver": {
                    "id": 14
                },
                "time": "1:34.486"
            },
            "distance": "306.3 Kms",
            "timezone": "utc",
            "date": "2024-09-22T12:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1943,
            "competition": {
                "id": 17,
                "name": "Singapore Grand Prix",
                "location": {
                    "country": "Singapore",
                    "city": "Singapour"
                }
            },
            "circuit": {
                "id": 17,
                "name": "Marina Bay Street Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/17.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-21T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1944,
            "competition": {
                "id": 17,
                "name": "Singapore Grand Prix",
                "location": {
                    "country": "Singapore",
                    "city": "Singapour"
                }
            },
            "circuit": {
                "id": 17,
                "name": "Marina Bay Street Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/17.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-21T09:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1945,
            "competition": {
                "id": 17,
                "name": "Singapore Grand Prix",
                "location": {
                    "country": "Singapore",
                    "city": "Singapour"
                }
            },
            "circuit": {
                "id": 17,
                "name": "Marina Bay Street Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/17.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-20T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1946,
            "competition": {
                "id": 17,
                "name": "Singapore Grand Prix",
                "location": {
                    "country": "Singapore",
                    "city": "Singapour"
                }
            },
            "circuit": {
                "id": 17,
                "name": "Marina Bay Street Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/17.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-20T09:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1947,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 56
            },
            "fastest_lap": {
                "driver": {
                    "id": 28
                },
                "time": "1:37.330"
            },
            "distance": "308.7 Kms",
            "timezone": "utc",
            "date": "2024-10-20T19:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1948,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "Sprint",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-19T18:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1949,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "1st Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-18T21:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1950,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-19T22:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1951,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-18T17:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1952,
            "competition": {
                "id": 21,
                "name": "Mexico Grand Prix",
                "location": {
                    "country": "Mexico",
                    "city": "Mexico"
                }
            },
            "circuit": {
                "id": 21,
                "name": "Autódromo Hermanos Rodríguez",
                "image": "https://media.api-sports.io/formula-1/circuits/21.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 71
            },
            "fastest_lap": {
                "driver": {
                    "id": 34
                },
                "time": "1:18.336"
            },
            "distance": "305.6 Kms",
            "timezone": "utc",
            "date": "2024-10-27T20:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1953,
            "competition": {
                "id": 21,
                "name": "Mexico Grand Prix",
                "location": {
                    "country": "Mexico",
                    "city": "Mexico"
                }
            },
            "circuit": {
                "id": 21,
                "name": "Autódromo Hermanos Rodríguez",
                "image": "https://media.api-sports.io/formula-1/circuits/21.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-26T21:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1954,
            "competition": {
                "id": 21,
                "name": "Mexico Grand Prix",
                "location": {
                    "country": "Mexico",
                    "city": "Mexico"
                }
            },
            "circuit": {
                "id": 21,
                "name": "Autódromo Hermanos Rodríguez",
                "image": "https://media.api-sports.io/formula-1/circuits/21.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-26T17:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1955,
            "competition": {
                "id": 21,
                "name": "Mexico Grand Prix",
                "location": {
                    "country": "Mexico",
                    "city": "Mexico"
                }
            },
            "circuit": {
                "id": 21,
                "name": "Autódromo Hermanos Rodríguez",
                "image": "https://media.api-sports.io/formula-1/circuits/21.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-25T22:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1956,
            "competition": {
                "id": 21,
                "name": "Mexico Grand Prix",
                "location": {
                    "country": "Mexico",
                    "city": "Mexico"
                }
            },
            "circuit": {
                "id": 21,
                "name": "Autódromo Hermanos Rodríguez",
                "image": "https://media.api-sports.io/formula-1/circuits/21.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-25T18:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1957,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 71
            },
            "fastest_lap": {
                "driver": {
                    "id": 25
                },
                "time": "1:20.472"
            },
            "distance": "305.9 Kms",
            "timezone": "utc",
            "date": "2024-11-03T15:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1958,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "Sprint",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-02T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1959,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-03T10:55:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1960,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-03T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1961,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-01T14:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1962,
            "competition": {
                "id": 35,
                "name": "Las Vegas Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Las Vegas"
                }
            },
            "circuit": {
                "id": 32,
                "name": "Las Vegas Strip Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/32.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 50
            },
            "fastest_lap": {
                "driver": {
                    "id": 49
                },
                "time": "1:34.876"
            },
            "distance": "310.1 Kms",
            "timezone": "utc",
            "date": "2024-11-24T06:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1963,
            "competition": {
                "id": 35,
                "name": "Las Vegas Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Las Vegas"
                }
            },
            "circuit": {
                "id": 32,
                "name": "Las Vegas Strip Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/32.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-23T06:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1964,
            "competition": {
                "id": 35,
                "name": "Las Vegas Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Las Vegas"
                }
            },
            "circuit": {
                "id": 32,
                "name": "Las Vegas Strip Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/32.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-23T02:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1965,
            "competition": {
                "id": 35,
                "name": "Las Vegas Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Las Vegas"
                }
            },
            "circuit": {
                "id": 32,
                "name": "Las Vegas Strip Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/32.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-22T06:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1966,
            "competition": {
                "id": 35,
                "name": "Las Vegas Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Las Vegas"
                }
            },
            "circuit": {
                "id": 32,
                "name": "Las Vegas Strip Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/32.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-22T02:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1967,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 57
            },
            "fastest_lap": {
                "driver": {
                    "id": 49
                },
                "time": "1:22.384"
            },
            "distance": "308.9 Kms",
            "timezone": "utc",
            "date": "2024-12-01T16:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1968,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "Sprint",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-30T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1969,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "1st Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-29T17:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1970,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-30T18:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1971,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-29T13:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1972,
            "competition": {
                "id": 23,
                "name": "Abu Dhabi Grand Prix",
                "location": {
                    "country": "United Arab Emirates",
                    "city": "Yas Marina, Abou Dabi "
                }
            },
            "circuit": {
                "id": 23,
                "name": "Yas Marina Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/23.png"
            },
            "season": 2024,
            "type": "Race",
            "laps": {
                "current": null,
                "total": 58
            },
            "fastest_lap": {
                "driver": {
                    "id": 2
                },
                "time": "1:25.637"
            },
            "distance": "306.3 Kms",
            "timezone": "utc",
            "date": "2024-12-08T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1973,
            "competition": {
                "id": 23,
                "name": "Abu Dhabi Grand Prix",
                "location": {
                    "country": "United Arab Emirates",
                    "city": "Yas Marina, Abou Dabi "
                }
            },
            "circuit": {
                "id": 23,
                "name": "Yas Marina Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/23.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-12-07T14:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1974,
            "competition": {
                "id": 23,
                "name": "Abu Dhabi Grand Prix",
                "location": {
                    "country": "United Arab Emirates",
                    "city": "Yas Marina, Abou Dabi "
                }
            },
            "circuit": {
                "id": 23,
                "name": "Yas Marina Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/23.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-12-07T10:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1975,
            "competition": {
                "id": 23,
                "name": "Abu Dhabi Grand Prix",
                "location": {
                    "country": "United Arab Emirates",
                    "city": "Yas Marina, Abou Dabi "
                }
            },
            "circuit": {
                "id": 23,
                "name": "Yas Marina Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/23.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-12-06T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1976,
            "competition": {
                "id": 23,
                "name": "Abu Dhabi Grand Prix",
                "location": {
                    "country": "United Arab Emirates",
                    "city": "Yas Marina, Abou Dabi "
                }
            },
            "circuit": {
                "id": 23,
                "name": "Yas Marina Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/23.png"
            },
            "season": 2024,
            "type": "1st Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-12-06T09:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1977,
            "competition": {
                "id": 2,
                "name": "Bahrain Grand Prix",
                "location": {
                    "country": "Bahrain",
                    "city": "Sakhir"
                }
            },
            "circuit": {
                "id": 2,
                "name": "Bahrain International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/2.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-01T16:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1978,
            "competition": {
                "id": 2,
                "name": "Bahrain Grand Prix",
                "location": {
                    "country": "Bahrain",
                    "city": "Sakhir"
                }
            },
            "circuit": {
                "id": 2,
                "name": "Bahrain International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/2.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-01T16:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1979,
            "competition": {
                "id": 32,
                "name": "Saudi Arabia Grand Prix",
                "location": {
                    "country": "Saudi Arabia",
                    "city": "Djeddah"
                }
            },
            "circuit": {
                "id": 29,
                "name": "Jeddah Corniche Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/29.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-08T17:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1980,
            "competition": {
                "id": 32,
                "name": "Saudi Arabia Grand Prix",
                "location": {
                    "country": "Saudi Arabia",
                    "city": "Djeddah"
                }
            },
            "circuit": {
                "id": 29,
                "name": "Jeddah Corniche Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/29.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-08T17:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1981,
            "competition": {
                "id": 1,
                "name": "Australia Grand Prix",
                "location": {
                    "country": "Australia",
                    "city": "Melbourne"
                }
            },
            "circuit": {
                "id": 1,
                "name": "Albert Park Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/1.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-23T05:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1982,
            "competition": {
                "id": 1,
                "name": "Australia Grand Prix",
                "location": {
                    "country": "Australia",
                    "city": "Melbourne"
                }
            },
            "circuit": {
                "id": 1,
                "name": "Albert Park Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/1.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-03-23T05:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1983,
            "competition": {
                "id": 19,
                "name": "Japan Grand Prix",
                "location": {
                    "country": "Japan",
                    "city": "Suzuka"
                }
            },
            "circuit": {
                "id": 19,
                "name": "Suzuka International Racing Course",
                "image": "https://media.api-sports.io/formula-1/circuits/19.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-06T06:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1984,
            "competition": {
                "id": 19,
                "name": "Japan Grand Prix",
                "location": {
                    "country": "Japan",
                    "city": "Suzuka"
                }
            },
            "circuit": {
                "id": 19,
                "name": "Suzuka International Racing Course",
                "image": "https://media.api-sports.io/formula-1/circuits/19.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-06T06:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1985,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "1st Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-20T07:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1986,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "2nd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-19T07:54:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1987,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "3rd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-19T08:11:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1988,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "Sprint",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-20T03:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1989,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "1st Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-03T20:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1990,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "2nd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-03T20:47:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1991,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "3rd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-03T21:02:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1992,
            "competition": {
                "id": 34,
                "name": "Miami Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Miami"
                }
            },
            "circuit": {
                "id": 31,
                "name": "Miami International Autodrome",
                "image": "https://media.api-sports.io/formula-1/circuits/31.png"
            },
            "season": 2024,
            "type": "Sprint",
            "laps": {
                "current": null,
                "total": 17
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": "307.6 Kms",
            "timezone": "utc",
            "date": "2024-05-04T16:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1993,
            "competition": {
                "id": 29,
                "name": "Emilia Romagna Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Imola"
                }
            },
            "circuit": {
                "id": 27,
                "name": "Autodromo Enzo e Dino Ferrari",
                "image": "https://media.api-sports.io/formula-1/circuits/27.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-18T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1994,
            "competition": {
                "id": 29,
                "name": "Emilia Romagna Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Imola"
                }
            },
            "circuit": {
                "id": 27,
                "name": "Autodromo Enzo e Dino Ferrari",
                "image": "https://media.api-sports.io/formula-1/circuits/27.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-18T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1995,
            "competition": {
                "id": 7,
                "name": "Monaco Grand Prix",
                "location": {
                    "country": "Monaco",
                    "city": "Monte-Carlo"
                }
            },
            "circuit": {
                "id": 7,
                "name": "Circuit de Monaco",
                "image": "https://media.api-sports.io/formula-1/circuits/7.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-25T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1996,
            "competition": {
                "id": 7,
                "name": "Monaco Grand Prix",
                "location": {
                    "country": "Monaco",
                    "city": "Monte-Carlo"
                }
            },
            "circuit": {
                "id": 7,
                "name": "Circuit de Monaco",
                "image": "https://media.api-sports.io/formula-1/circuits/7.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-05-25T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1997,
            "competition": {
                "id": 9,
                "name": "Canada Grand Prix",
                "location": {
                    "country": "Canada",
                    "city": "Montréal"
                }
            },
            "circuit": {
                "id": 9,
                "name": "Circuit Gilles-Villeneuve",
                "image": "https://media.api-sports.io/formula-1/circuits/9.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-08T20:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1998,
            "competition": {
                "id": 9,
                "name": "Canada Grand Prix",
                "location": {
                    "country": "Canada",
                    "city": "Montréal"
                }
            },
            "circuit": {
                "id": 9,
                "name": "Circuit Gilles-Villeneuve",
                "image": "https://media.api-sports.io/formula-1/circuits/9.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-08T20:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 1999,
            "competition": {
                "id": 6,
                "name": "Spain Grand Prix",
                "location": {
                    "country": "Spain",
                    "city": "Montmeló"
                }
            },
            "circuit": {
                "id": 6,
                "name": "Circuit de Barcelona-Catalunya",
                "image": "https://media.api-sports.io/formula-1/circuits/6.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-22T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2000,
            "competition": {
                "id": 6,
                "name": "Spain Grand Prix",
                "location": {
                    "country": "Spain",
                    "city": "Montmeló"
                }
            },
            "circuit": {
                "id": 6,
                "name": "Circuit de Barcelona-Catalunya",
                "image": "https://media.api-sports.io/formula-1/circuits/6.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-22T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2001,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-29T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2002,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "1st Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-28T14:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2003,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "2nd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-28T14:49:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2004,
            "competition": {
                "id": 11,
                "name": "Austria Grand Prix",
                "location": {
                    "country": "Austria",
                    "city": "Spielberg"
                }
            },
            "circuit": {
                "id": 11,
                "name": "Red Bull Ring",
                "image": "https://media.api-sports.io/formula-1/circuits/11.png"
            },
            "season": 2024,
            "type": "3rd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-06-28T15:06:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2005,
            "competition": {
                "id": 12,
                "name": "Great Britain Grand Prix",
                "location": {
                    "country": "United Kingdom",
                    "city": "Silverstone Northamptonshire"
                }
            },
            "circuit": {
                "id": 12,
                "name": "Silverstone Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/12.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-06T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2006,
            "competition": {
                "id": 12,
                "name": "Great Britain Grand Prix",
                "location": {
                    "country": "United Kingdom",
                    "city": "Silverstone Northamptonshire"
                }
            },
            "circuit": {
                "id": 12,
                "name": "Silverstone Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/12.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-06T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2007,
            "competition": {
                "id": 14,
                "name": "Hungary Grand Prix",
                "location": {
                    "country": "Hungary",
                    "city": "Mogyoród"
                }
            },
            "circuit": {
                "id": 14,
                "name": "Hungaroring",
                "image": "https://media.api-sports.io/formula-1/circuits/14.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-20T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2008,
            "competition": {
                "id": 14,
                "name": "Hungary Grand Prix",
                "location": {
                    "country": "Hungary",
                    "city": "Mogyoród"
                }
            },
            "circuit": {
                "id": 14,
                "name": "Hungaroring",
                "image": "https://media.api-sports.io/formula-1/circuits/14.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-20T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2009,
            "competition": {
                "id": 15,
                "name": "Belgium Grand Prix",
                "location": {
                    "country": "Belgium",
                    "city": "Francorchamps"
                }
            },
            "circuit": {
                "id": 15,
                "name": "Circuit de Spa-Francorchamps",
                "image": "https://media.api-sports.io/formula-1/circuits/15.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-27T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2010,
            "competition": {
                "id": 15,
                "name": "Belgium Grand Prix",
                "location": {
                    "country": "Belgium",
                    "city": "Francorchamps"
                }
            },
            "circuit": {
                "id": 15,
                "name": "Circuit de Spa-Francorchamps",
                "image": "https://media.api-sports.io/formula-1/circuits/15.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-07-27T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2011,
            "competition": {
                "id": 5,
                "name": "Netherlands Grand Prix",
                "location": {
                    "country": "Netherlands",
                    "city": "Zandvoort"
                }
            },
            "circuit": {
                "id": 5,
                "name": "Circuit Zandvoort",
                "image": "https://media.api-sports.io/formula-1/circuits/5.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-24T13:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2012,
            "competition": {
                "id": 5,
                "name": "Netherlands Grand Prix",
                "location": {
                    "country": "Netherlands",
                    "city": "Zandvoort"
                }
            },
            "circuit": {
                "id": 5,
                "name": "Circuit Zandvoort",
                "image": "https://media.api-sports.io/formula-1/circuits/5.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-24T13:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2013,
            "competition": {
                "id": 16,
                "name": "Italy Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Monza"
                }
            },
            "circuit": {
                "id": 16,
                "name": "Autodromo Nazionale Monza",
                "image": "https://media.api-sports.io/formula-1/circuits/16.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-31T14:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2014,
            "competition": {
                "id": 16,
                "name": "Italy Grand Prix",
                "location": {
                    "country": "Italy",
                    "city": "Monza"
                }
            },
            "circuit": {
                "id": 16,
                "name": "Autodromo Nazionale Monza",
                "image": "https://media.api-sports.io/formula-1/circuits/16.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-08-31T14:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2015,
            "competition": {
                "id": 8,
                "name": "Azerbaijan Grand Prix",
                "location": {
                    "country": "Azerbaijan",
                    "city": "Bakou"
                }
            },
            "circuit": {
                "id": 8,
                "name": "Baku City Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/8.png"
            },
            "season": 2024,
            "type": "2nd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-13T13:00:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2016,
            "competition": {
                "id": 8,
                "name": "Azerbaijan Grand Prix",
                "location": {
                    "country": "Azerbaijan",
                    "city": "Bakou"
                }
            },
            "circuit": {
                "id": 8,
                "name": "Baku City Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/8.png"
            },
            "season": 2024,
            "type": "3rd Practice",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-14T08:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2017,
            "competition": {
                "id": 17,
                "name": "Singapore Grand Prix",
                "location": {
                    "country": "Singapore",
                    "city": "Singapour"
                }
            },
            "circuit": {
                "id": 17,
                "name": "Marina Bay Street Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/17.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-21T13:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2018,
            "competition": {
                "id": 17,
                "name": "Singapore Grand Prix",
                "location": {
                    "country": "Singapore",
                    "city": "Singapour"
                }
            },
            "circuit": {
                "id": 17,
                "name": "Marina Bay Street Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/17.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-09-21T13:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2019,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-19T22:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2020,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-19T22:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2021,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "2nd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-18T21:49:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2022,
            "competition": {
                "id": 20,
                "name": "USA Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Elroy"
                }
            },
            "circuit": {
                "id": 20,
                "name": "Circuit of The Americas",
                "image": "https://media.api-sports.io/formula-1/circuits/20.png"
            },
            "season": 2024,
            "type": "3rd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-18T22:06:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2023,
            "competition": {
                "id": 21,
                "name": "Mexico Grand Prix",
                "location": {
                    "country": "Mexico",
                    "city": "Mexico"
                }
            },
            "circuit": {
                "id": 21,
                "name": "Autódromo Hermanos Rodríguez",
                "image": "https://media.api-sports.io/formula-1/circuits/21.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-26T21:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2024,
            "competition": {
                "id": 21,
                "name": "Mexico Grand Prix",
                "location": {
                    "country": "Mexico",
                    "city": "Mexico"
                }
            },
            "circuit": {
                "id": 21,
                "name": "Autódromo Hermanos Rodríguez",
                "image": "https://media.api-sports.io/formula-1/circuits/21.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-10-26T21:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2025,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-03T11:18:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2026,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "1st Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-01T18:30:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2027,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "2nd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-01T18:49:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2028,
            "competition": {
                "id": 22,
                "name": "Brazil Grand Prix",
                "location": {
                    "country": "Brazil",
                    "city": "São Paulo"
                }
            },
            "circuit": {
                "id": 22,
                "name": "Autódromo José Carlos Pace",
                "image": "https://media.api-sports.io/formula-1/circuits/22.png"
            },
            "season": 2024,
            "type": "3rd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-01T19:06:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2029,
            "competition": {
                "id": 35,
                "name": "Las Vegas Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Las Vegas"
                }
            },
            "circuit": {
                "id": 32,
                "name": "Las Vegas Strip Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/32.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-23T06:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2030,
            "competition": {
                "id": 35,
                "name": "Las Vegas Grand Prix",
                "location": {
                    "country": "USA",
                    "city": "Las Vegas"
                }
            },
            "circuit": {
                "id": 32,
                "name": "Las Vegas Strip Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/32.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-23T07:09:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2031,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-30T18:25:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2032,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-30T18:48:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2033,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "2nd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-29T17:49:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2034,
            "competition": {
                "id": 33,
                "name": "Qatar Grand Prix",
                "location": {
                    "country": "Qatar",
                    "city": "Losail"
                }
            },
            "circuit": {
                "id": 30,
                "name": "Losail International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/30.png"
            },
            "season": 2024,
            "type": "3rd Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-11-29T18:06:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2035,
            "competition": {
                "id": 23,
                "name": "Abu Dhabi Grand Prix",
                "location": {
                    "country": "United Arab Emirates",
                    "city": "Yas Marina, Abou Dabi "
                }
            },
            "circuit": {
                "id": 23,
                "name": "Yas Marina Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/23.png"
            },
            "season": 2024,
            "type": "2nd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-12-07T14:28:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2036,
            "competition": {
                "id": 23,
                "name": "Abu Dhabi Grand Prix",
                "location": {
                    "country": "United Arab Emirates",
                    "city": "Yas Marina, Abou Dabi "
                }
            },
            "circuit": {
                "id": 23,
                "name": "Yas Marina Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/23.png"
            },
            "season": 2024,
            "type": "3rd Qualifying",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-12-07T14:51:00+00:00",
            "weather": null,
            "status": "Completed"
        },
        {
            "id": 2150,
            "competition": {
                "id": 4,
                "name": "China Grand Prix",
                "location": {
                    "country": "China",
                    "city": "Anting"
                }
            },
            "circuit": {
                "id": 4,
                "name": "Shanghai International Circuit",
                "image": "https://media.api-sports.io/formula-1/circuits/4.png"
            },
            "season": 2024,
            "type": "1st Sprint Shootout",
            "laps": {
                "current": null,
                "total": null
            },
            "fastest_lap": {
                "driver": {
                    "id": null
                },
                "time": null
            },
            "distance": null,
            "timezone": "utc",
            "date": "2024-04-19T07:30:00+00:00",
            "weather": null,
            "status": "Completed"
        }
    ]

export const Season = () => {
  const {active} = useSeasonStore();
  const {race, startSetRace, startSetRaces} = useRacesStore();

  let cont = 1

  const activarRace = (e) => {
    let id = '';

    if(e.target.nodeName === 'P'){
        id = e.target.parentNode.id;
    }else{
        id = e.target.id;
    };

    startSetRace(id);

  };

  startSetRaces(races)

  return (
    <div className='w-full flex-1 p-6 overflow-y-scroll h-screen'>
      
      <header className="mt-2">
        <h1 className="text-center text-2xl">Temporada {active}</h1>

        <div className="grid grid-cols-12 mt-2 gap-4">
          {
            races.map((elem, index) => (
                elem.type === 'Race' && 
                <div onClick={activarRace} key={index} id={elem.id} className={`${race?.id === elem.id ? 'bg-blue-800' : 'bg-blue-500'} text-white p-4 rounded shadow cursor-pointer hover:bg-blue-600`}>
                  <p className="text-center font-bold">{cont++}</p>
                </div>
            ))
          }
        </div>
      </header>

      <main>
        <Race/>
      </main>
    </div>
  )
}
