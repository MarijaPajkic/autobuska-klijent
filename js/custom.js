const config = {
    "title": "Autobuska",
    "description": "Klijentska web aplikacija za diplomski rad.",
    "apiUrl": "http://localhost:8080/AutobuskaWebService",
    "entities": [
        {
            "urlName": "dnevnasmena",
            "nameSing": "Dnevna smena",
            "namePlu": "Dnevne smene",
            "path": "/dnevnasmena",
            "attributes": [
                {
                    "name": "dnevnasmenaId",
                    "displayName": "ID dnevne smene",
                    "type": "number"
                },
                {
                    "name": "datumdnevnesmene",
                    "displayName": "Datum dnevne smene",
                    "type": "date"
                },
                {
                    "name": "zaposlenId",
                    "displayName": "Zaposlen",
                    "type": {
                        "key": "zaposlenId",
                        "value": [
                            "ime",
                            "prezime"
                        ]
                    }
                },
                {
                    "name": "smenaId",
                    "displayName": "Smena",
                    "type": {
                        "key": "smenaId",
                        "value": "nazivsmene"
                    }
                }
            ]
        },
        {
            "urlName": "karta",
            "nameSing": "Karta",
            "namePlu": "Karte",
            "path": "/karta",
            "attributes": [
                {
                    "name": "kartaId",
                    "displayName": "ID karte",
                    "type": "number"
                },
                {
                    "name": "prevoznik",
                    "displayName": "Prevoznik",
                    "type": "text"
                },
                {
                    "name": "relacija",
                    "displayName": "Relacija",
                    "type": "text"
                },
                {
                    "name": "datumpolaska",
                    "displayName": "Datum polaska",
                    "type": "date"
                },
                {
                    "name": "vremepolaska",
                    "displayName": "Vreme polaska",
                    "type": "date"
                },
                {
                    "name": "brojsedista",
                    "displayName": "Broj sedišta",
                    "type": "number"
                },
                {
                    "name": "peron",
                    "displayName": "Peron",
                    "type": "number"
                },
                {
                    "name": "cena",
                    "displayName": "Cena",
                    "type": "number"
                },
                {
                    "name": "popust",
                    "displayName": "Popust",
                    "type": "text"
                },
                {
                    "name": "stanicnausluga",
                    "displayName": "Stanična usluga",
                    "type": "number"
                },
                {
                    "name": "placanjeId",
                    "displayName": "Plaćanje",
                    "type": {
                        "key": "placanjeId",
                        "value": "tipplacanja"
                    }
                },
                {
                    "name": "voznjaId",
                    "displayName": "Vožnja",
                    "type": {
                        "key": "voznjaId",
                        "value": "voznjaId"
                    }
                }
            ]
        },
        {
            "urlName": "korisnickinalog",
            "nameSing": "Korisnički nalog",
            "namePlu": "Korisnički nalozi",
            "path": "/korisnickinalog",
            "attributes": [
                {
                    "name": "korisnickinalogId",
                    "displayName": "ID korisničkog naloga",
                    "type": "number"
                },
                {
                    "name": "korisnickoime",
                    "displayName": "Korisničko ime",
                    "type": "text"
                },
                {
                    "name": "korisnickiemail",
                    "displayName": "Korisnički e-mail",
                    "type": "text"
                },
                {
                    "name": "korisnickalozinka",
                    "displayName": "Korisnička lozinka",
                    "type": "text"
                },
                {
                    "name": "zaposlenId",
                    "displayName": "Zaposlen",
                    "type": {
                        "key": "zaposlenId",
                        "value": [
                            "ime",
                            "prezime"
                        ]
                    }
                }
            ]
        },
        {
            "urlName": "medjustajaliste",
            "nameSing": "Međustajalište",
            "namePlu": "Međustajališta",
            "path": "/medjustajaliste",
            "attributes": [
                {
                    "name": "medjustajalisteId",
                    "displayName": "ID međustajališta",
                    "type": "number"
                },
                {
                    "name": "vremedolaskanastajaliste",
                    "displayName": "Vreme dolaska na stajalište",
                    "type": "date"
                },
                {
                    "name": "stajalisteId",
                    "displayName": "Stajalište",
                    "type": {
                        "key": "stajalisteId",
                        "value": "nazivstajalista"
                    }
                },
                {
                    "name": "relacijaId",
                    "displayName": "Relacija",
                    "type": {
                        "key": "relacijaId",
                        "value": "relacijaId"
                    }
                }
            ]
        },
        {
            "urlName": "placanje",
            "nameSing": "Plaćanje",
            "namePlu": "Plaćanja",
            "path": "/placanje",
            "attributes": [
                {
                    "name": "placanjeId",
                    "displayName": "ID plaćanja",
                    "type": "number"
                },
                {
                    "name": "tipplacanja",
                    "displayName": "Tip plaćanja",
                    "type": "text"
                },
                {
                    "name": "datumplacanja",
                    "displayName": "Datum plaćanja",
                    "type": "date"
                },
                {
                    "name": "vremeplacanja",
                    "displayName": "Vreme plaćanja",
                    "type": "date"
                },
                {
                    "name": "kartaId",
                    "displayName": "Karta",
                    "type": {
                        "key": "kartaId",
                        "value": "kartaId"
                    }
                }
            ]
        },
        {
            "urlName": "relacija",
            "nameSing": "Relacija",
            "namePlu": "Relacije",
            "path": "/relacija",
            "attributes": [
                {
                    "name": "relacijaId",
                    "displayName": "ID relacije",
                    "type": "number"
                },
                {
                    "name": "vremepolaska",
                    "displayName": "Vreme polaska",
                    "type": "date"
                },
                {
                    "name": "vremedolaska",
                    "displayName": "Vreme dolaska",
                    "type": "date"
                },
                {
                    "name": "krajnjestajalisteId",
                    "displayName": "Krajnje stajalište",
                    "type": {
                        "key": "stajalisteId",
                        "value": "nazivstajalista"
                    }
                },
                {
                    "name": "polaznostajalisteId",
                    "displayName": "Polazno stajalište",
                    "type": {
                        "key": "stajalisteId",
                        "value": "nazivstajalista"
                    }
                },
                {
                    "name": "tipsaobracajaId",
                    "displayName": "Tip saobraćaja",
                    "type": {
                        "key": "tipsaobracajaId",
                        "value": "tipsaobracajaNaziv"
                    }
                }
            ]
        },
        {
            "urlName": "rezervacija",
            "nameSing": "Rezervacija",
            "namePlu": "Rezervacije",
            "path": "/rezervacija",
            "attributes": [
                {
                    "name": "rezervacijaId",
                    "displayName": "ID rezervacije",
                    "type": "number"
                },
                {
                    "name": "datumrezervacije",
                    "displayName": "Datum rezervacije",
                    "type": "date"
                },
                {
                    "name": "vremerezervacije",
                    "displayName": "Vreme reyervacije",
                    "type": "date"
                },
                {
                    "name": "tipreyervisanja",
                    "displayName": "Tip rezervisanja",
                    "type": "text"
                },
                {
                    "name": "kartaId",
                    "displayName": "Karta",
                    "type": {
                        "key": "kartaId",
                        "value": "kartaId"
                    }
                }
            ]
        },
        {
            "urlName": "smena",
            "nameSing": "Smena",
            "namePlu": "Smene",
            "path": "/smena",
            "attributes": [
                {
                    "name": "smenaId",
                    "displayName": "ID smene",
                    "type": "number"
                },
                {
                    "name": "nazivsmene",
                    "displayName": "Naziv smene",
                    "type": "text"
                },
                {
                    "name": "pocetaksmene",
                    "displayName": "Početak smene",
                    "type": "text"
                },
                {
                    "name": "krajsmene",
                    "displayName": "Kraj smene",
                    "type": "text"
                }
            ]
        },
        {
            "urlName": "stajaliste",
            "nameSing": "Stajalište",
            "namePlu": "Stajališta",
            "path": "/stajaliste",
            "attributes": [
                {
                    "name": "stajalisteId",
                    "displayName": "ID stajališta",
                    "type": "number"
                },
                {
                    "name": "nazivstajalista",
                    "displayName": "Naziv stajališta",
                    "type": "text"
                }
            ]
        },
        {
            "urlName": "tipsaobracaja",
            "nameSing": "Tip saobraćaja",
            "namePlu": "Tipovi saobraćaja",
            "path": "/tipsaobracaja",
            "attributes": [
                {
                    "name": "tipsaobracajaId",
                    "displayName": "ID tipa saobraćaja",
                    "type": "number"
                },
                {
                    "name": "tipsaobracajaNaziv",
                    "displayName": "Naziv tipa saobraćaja",
                    "type": "text"
                }
            ]
        },
        {
            "urlName": "vozilo",
            "nameSing": "Vozilo",
            "namePlu": "Vozila",
            "path": "/vozilo",
            "attributes": [
                {
                    "name": "voziloId",
                    "displayName": "ID vozila",
                    "type": "number"
                },
                {
                    "name": "registracija",
                    "displayName": "Registracija",
                    "type": "text"
                },
                {
                    "name": "brojsedista",
                    "displayName": "Broj sedišta",
                    "type": "number"
                },
                {
                    "name": "zaposlenId",
                    "displayName": "Zaposlen",
                    "type": {
                        "key": "zaposlenId",
                        "value": [
                            "ime",
                            "prezime"
                        ]
                    }
                }
            ]
        },
        {
            "urlName": "voznja",
            "nameSing": "Vožnja",
            "namePlu": "Vožnje",
            "path": "/voznja",
            "attributes": [
                {
                    "name": "voznjaId",
                    "displayName": "ID vožnje",
                    "type": "number"
                },
                {
                    "name": "brojkola",
                    "displayName": "Broj kola",
                    "type": "number"
                },
                {
                    "name": "datumvoznje",
                    "displayName": "Datum vožnje",
                    "type": "date"
                },
                {
                    "name": "voziloId",
                    "displayName": "Vozilo",
                    "type": {
                        "key": "voziloId",
                        "value": "registracija"
                    }
                },
                {
                    "name": "relacijaId",
                    "displayName": "Relacija",
                    "type": {
                        "key": "relacijaId",
                        "value": "relacijaId"
                    }
                },
                {
                    "name": "zaposlenId",
                    "displayName": "Zaposlen",
                    "type": {
                        "key": "zaposlenId",
                        "value": [
                            "ime",
                            "prezime"
                        ]
                    }
                }
            ]
        },
        {
            "urlName": "zanimanje",
            "nameSing": "Zanimanje",
            "namePlu": "Zanimanja",
            "path": "/zanimanje",
            "attributes": [
                {
                    "name": "zanimanjeId",
                    "displayName": "ID zanimanja",
                    "type": "number"
                },
                {
                    "name": "nazivzanimanja",
                    "displayName": "Naziv zanimanja",
                    "type": "text"
                }
            ]
        },
        {
            "urlName": "zaposlen",
            "nameSing": "Zaposlen",
            "namePlu": "Zaposleni",
            "path": "/zaposlen",
            "attributes": [
                {
                    "name": "zaposlenId",
                    "displayName": "ID zaposlenog",
                    "type": "number"
                },
                {
                    "name": "ime",
                    "displayName": "Ime",
                    "type": "text"
                },
                {
                    "name": "prezime",
                    "displayName": "Prezime",
                    "type": "text"
                },
                {
                    "name": "jmbg",
                    "displayName": "JMBG",
                    "type": "text"
                },
                {
                    "name": "adresaprebivalista",
                    "displayName": "Adresa prebivališta",
                    "type": "text"
                },
                {
                    "name": "kontakttelefon",
                    "displayName": "Kontakt telefon",
                    "type": "text"
                },
                {
                    "name": "datumzaposljavanja",
                    "displayName": "Datum zapošljavanja",
                    "type": "date"
                },
                {
                    "name": "status",
                    "displayName": "Status",
                    "type": "boolean"
                },
                {
                    "name": "korisnickinalogId",
                    "displayName": "Korisnički nalog",
                    "type": {
                        "key": "korisnickinalogId",
                        "value": "korisnickoime"
                    }
                },
                {
                    "name": "zanimanjeId",
                    "displayName": "Zanimanje",
                    "type": {
                        "key": "zanimanjeId",
                        "value": "nazivzanimanja"
                    }
                }
            ]
        }
    ]
};

let loadOneCount = 0;
let loadAllCount = {};
let entityObjects = {};

function getEntityData(entityName) {
    const ret = config['entities'].filter(function (entity) {
        return entity['urlName'] === entityName;
    });
    return ret !== undefined && ret != null && ret.length > 0 ? ret[0] : null;
}

function loadAll(entityName, isIndex, elementId, isEditOrCreate = false, type = {}) {
    const searchedEntity = getEntityData(entityName);
    if (searchedEntity) {
        const url = config['apiUrl'] + searchedEntity['path'];
        incrementLoadAllCountForEntity(searchedEntity);
        loadAllHelper(url, elementId, searchedEntity, isIndex, isEditOrCreate, type);
    } else {
        console.log('Ne postoji entitet "' + entityName + '"');
    }
}

function loadAllHelper(url, elementId, searchedEntity, isIndex, isEditOrCreate = false, type = {}) {
    $.getJSON(url, null, function (data) {
        resetLoadAllCountForEntity(searchedEntity);
        if (!isEditOrCreate) {
            createTable(elementId, searchedEntity, isIndex, data);
        } else {
            createSelectOptions(searchedEntity, data, elementId, type);
        }
        entityObjects[searchedEntity['urlName']] = data;
    }).fail(function () {
        if (getLoadAllCountForEntity(searchedEntity) % 3 === 0) {
            resetLoadAllCountForEntity(searchedEntity);
            window.location.replace('index.html');
        } else {
            incrementLoadAllCountForEntity(searchedEntity);
            loadAllHelper(url, elementId, searchedEntity, isIndex, isEditOrCreate, type);
        }
    });
}

function incrementLoadAllCountForEntity(entity) {
    if (loadAllCount.hasOwnProperty(entity['urlName'])) {
        loadAllCount[entity['urlName']]++;
    } else {
        loadAllCount[entity['urlName']] = 1;
    }
}

function getLoadAllCountForEntity(entity) {
    if (loadAllCount.hasOwnProperty(entity['urlName'])) {
        return loadAllCount[entity['urlName']];
    }
    loadAllCount[entity['urlName']] = 0;
    return 0;
}

function resetLoadAllCountForEntity(entity) {
    loadAllCount[entity['urlName']] = 0;
}

function loadOne(elementId, entityName, id, izmena = false) {
    const searchedEntity = getEntityData(entityName);
    if (searchedEntity) {
        const url = config['apiUrl'] + searchedEntity['path'] + '/' + id;
        loadOneCount++;
        loadOneHelper(url, elementId, searchedEntity, izmena);
    }
}

function loadOneHelper(url, elementId, searchedEntity, izmena = false) {
    $.getJSON(url, null, function (data) {
        if (data !== undefined && data != null) {
            loadOneCount = 0;
            if (!izmena) {
                createObjectDetailsTable(elementId, data, searchedEntity);
            } else {
                for (let attribute of searchedEntity['attributes']) {
                    if (typeof attribute['type'] === 'object') {
                        if (data[attribute['type']['key'].split('Id')[0]] !== undefined && data[attribute['type']['key'].split('Id')[0]] != null) {
                            $('#' + attribute['name']).val('' + data[attribute['type']['key'].split('Id')[0]][attribute['type']['key']]);
                        }
                    } else {
                        if (attribute['type'] === 'number' || attribute['type'] === 'text') {
                            $('#' + attribute['name']).val(data[attribute['name']]);
                        } else if (attribute['type'] === 'boolean') {
                            $('#' + attribute['name']).attr('checked', data[attribute['name']]);
                        }
                    }
                }
            }
        } else {
            loadOneCount = 0;
            window.location.replace('index.html');
        }
    }).fail(function () {
        if (loadOneCount % 3 === 0) {
            loadOneCount = 0;
            window.location.replace('index.html');
        } else {
            loadOneCount++;
            loadOneHelper(url, elementId, searchedEntity);
        }
    });
}

function getUrlParams() {
    const query = window.location.search.substring(1);
    return query.split("&");
}

function createTable(elementId, entity, isIndex, data) {
    $('#' + elementId).append(`
        <div class="` + (isIndex ? 'col-md-6' : 'col-md-12') + `" style="margin-top: 20px; padding-bottom: 55px;">
            <div class="row">
                <div class="col" style="float: left; margin-top: 20px;">
                    <h1>` + entity['namePlu'] + ` <a class="icon-link btn-outline-id" href="dodaj-izmeni.html?akcija=kreiraj&entitet=` + entity['urlName'] + `"><span
                            class="fas fa-plus-circle"></span></a></h1>
                </div>

                <div class="col" style="float: right; margin-top: 10px;">
                    <div class="row" style="margin-right: 20px;">
                        <div class="col-9" style="float: left; padding-right: 5px; margin-top: 20px">
                            <input aria-describedby="Pretraga vozila" aria-label="Pretraga" class="form-control"
                                   placeholder="Pretraži..."
                                   type="text"/>
                        </div>
                        <div class="col-3" style="float: right; padding-left: 5px; margin-top: 20px">
                            <button class="btn btn-outline-success" type="button">Pretraži</button>
                        </div>
                    </div>
                </div>

            </div>

            <table class="table table-hover" style="margin-top: 20px;">
                <thead>
                <tr>
                    ` + dataTableHeaderData(entity) + `
                </tr>
                </thead>

                <tbody>
                ` + dataTableRowData(data, entity) + `
                </tbody>
            </table>

            <nav aria-label="Page navigation example" class="content-nav">
                <ul class="pagination">
                    <li class="page-item">
                        <a aria-label="Previous" class="page-link btn-outline-pag" href="#">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link btn-outline-pag" href="#">1</a></li>
                    <li class="page-item"><a class="page-link btn-outline-pag" href="#">2</a></li>
                    <li class="page-item"><a class="page-link btn-outline-pag" href="#">3</a></li>
                    <li class="page-item">
                        <a aria-label="Next" class="page-link btn-outline-pag" href="#">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
        `);
}

function dataTableHeaderData(entity) {
    let ret = "";

    for (let attribute of entity['attributes']) {
        ret += `<th scope="col">` + attribute['displayName'] + `</th>
`;
    }

    ret += `<th scope="col">Akcije</th>
`;

    return ret;
}

function dataTableRowData(data, entity) {
    let ret = "";

    for (let obj of data) {
        ret += `
        <tr>
            `;
        for (let attribute of entity['attributes']) {
            ret += `<td>`;
            if (typeof attribute['type'] === 'object') {
                const tmp = obj[attribute['name'].split('Id')[0]];
                if (tmp !== undefined && tmp != null) {
                    ret += obj[attribute['name'].split('Id')[0]][attribute['type']['value']];
                } else {
                    ret += '/';
                }
            } else {
                ret += obj[attribute['name']];
            }
            ret += `</td>
                    `;
        }
        ret += `
            <td>
                <a class="icon-link btn-outline-id sm" href="pojedinacni-prikaz.html?entitet=` +
            entity['urlName'] + `&id=` + obj[entity['attributes'][0]['name']] + `"><span
                        class="fas fa-eye"></span></a>&nbsp;
                <a class="icon-link btn-outline-id sm" href="dodaj-izmeni.html?akcija=izmeni&entitet=` +
            entity['urlName'] + `&id=` + obj[entity['attributes'][0]['name']] + `"><span
                        class="fas fa-pencil-alt"></span></a>&nbsp;
                <a class="icon-link btn-outline-id sm" href="#"><span class="fas fa-minus-circle"></span></a>
            </td>
        </tr>
        `;
    }

    return ret;
}

function createObjectDetailsTable(elementId, obj, entity) {
    for (let attribute of entity['attributes']) {
        $('#' + elementId).append(`
        <tr>
            <th scope="row">` + attribute['displayName'] + `</th>
            <td>` + ((typeof attribute['type'] === 'object') ?
            (obj[attribute['name'].split('Id')[0]] !== undefined && obj[attribute['name'].split('Id')[0]] != null ?
                obj[attribute['name'].split('Id')[0]][attribute['type']['value']] : '/') :
            obj[attribute['name']]) + `</td>
        </tr>
        `);
    }
}

function createFormLayout(entity, elementId) {
    let ret = ``;
    for (let attribute of entity['attributes']) {
        if (typeof attribute['type'] === "object") {
            // loadAll za taj entitet
            const selectEntityName = attribute['name'].split('Id')[0];
            ret += `<div class="form-group">
                        <label for="` + attribute['name'] + `">` + attribute['displayName'] + `</label>
                        <select class="form-control" id="` + attribute['name'] + `">
                        </select>
                    </div>`;
            // rasporedi elemente u SELECT-u
            loadAll(selectEntityName, false, attribute['name'], true, attribute['type']);
        } else {
            if (attribute['type'] === 'text' || attribute['type'] === 'number' || attribute['type'] === 'date') {
                ret += createStandardInput(attribute);
            } else if (attribute['type'] === 'boolean') {
                ret += createCheckboxInput(attribute);
            }
        }
    }
    ret += `

            <div class="form-group row">
                <div class="col-md-12">
                    <button type="submit" class="btn btn-outline-pag btn-lg btn-block">Sačuvaj</button>
                </div>
            </div>`;
    $('#' + elementId).append(ret);
}

function createStandardInput(attribute) {
    return `<div class="form-group row">
                <div class="form-group col-md-12">
                    <label for="` + attribute['name'] + `">` + attribute['displayName'] + `</label>
                    <input type="` + attribute['type'] + `" class="form-control" id="` + attribute['name'] + `"
                           placeholder="` + attribute['displayName'] + `...">
                </div>
            </div>
            `;
}

function createCheckboxInput(attribute) {
    return `<div class="form-group row">
                <div class="col-sm-2">` + attribute['displayName'] + `</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="` + attribute['name'] + `">
                        <label class="form-check-label" for="` + attribute['name'] + `">
                            ` + attribute['displayName'] + `
                        </label>
                    </div>
                </div>
            </div>
            `;
}

function createSelectOptions(searchedEntity, data, editOrCreateSelectId, type) {
    for (let obj of data) {
        $('#' + editOrCreateSelectId).append(
            `<option value="` + obj[type['key']] + `">` + obj[type['value']] + `</option>
            `);
    }
}

function saveObject(entityName, isEdit = false) {
    const entityData = getEntityData(entityName);
    let obj = {};
    for (let attribute of entityData['attributes']) {
        if (typeof attribute['type'] === 'object') {
            obj[attribute['name'].split('Id')[0]] = entityObjects[attribute['name'].split('Id')[0]].filter(function (obj) {
                return obj[attribute['name']] === +$('#' + attribute['name'])[0].value;
            })[0];
            // obj[attribute['name']] = +$('#' + attribute['name'])[0].value;
        } else {
            if (attribute['type'] === 'number') {
                obj[attribute['name']] = +$('#' + attribute['name'])[0].value;
            } else if (attribute['type'] === 'boolean') {
                obj[attribute['name']] = $('#' + attribute['name'])[0].checked;
            } else {
                obj[attribute['name']] = $('#' + attribute['name'])[0].value;
            }
        }
    }
    console.log(obj);
    if (isEdit) {
        const idVariable = entityData['path'].substr(1) + 'Id';
        $.ajax({
            type: "POST",
            url: config.apiUrl + entityData['path'] + '/' + obj[idVariable],
            data: JSON.stringify(obj),
            success: function (data) {
                window.location.replace('grupni-prikaz.html?entitet=' + entityData['urlName']);
            },
            contentType: 'application/json'
        });
    } else {
        $.ajax({
            type: "POST",
            url: config.apiUrl + entityData['path'],
            data: JSON.stringify(obj),
            success: function (data) {
                window.location.replace('grupni-prikaz.html?entitet=' + entityData['urlName']);
            },
            contentType: 'application/json'
        });
    }

    // window.location.replace('pojedinacni-prikaz.html?entitet=zaposleni&id=1');
}
