import { faker } from "@faker-js/faker"
const SELECT_MAKE = '#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_OF_MANUFACTURE = '#dateofmanufacture'
const SELECT_NUMBER_OF_SEATS = '#numberofseats'
const RADIO_MALE = '#gendermale'
const RADIO_FEMALE = '#genderfemale'
const SELECT_FUEL_TYPE = '#fuel'
const INPUT_LAST_PRICE = '#listprice'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT_INSURANT_DATA = '#nextenterinsurantdata'
const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_BIRTHDATE = '#birthdate'
const SELECT_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const SELECT_OCCUPATION = '#occupation'
const BTN_NEXT_PRODUCT_DATA = '#nextenterproductdata'
const INPUT_START_DATE = '#startdate'
const SELECT_INSURANCE_SUM = '#insurancesum'
const SELECT_MERIT_RATING = '#meritrating'
const SELECT_DAMAGE_INSURANCE = '#damageinsurance'
const INPUT_EURO_PROTECTION = '#EuroProtection'
const INPUT_LEGAL_DEFENSE_INSURANCE = '#LegalDefenseInsurance'
const SELECT_COURTESY_CAR = '#courtesycar'
const BTN_NEXT_SELECT_PRICE = '#nextselectpriceoption'
const BTN_NEXT_SEND_QUOTE = '#nextsendquote'
const INPUT_EMAIL = '#email'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND_EMAIL = '#sendemail'
const STEPS_NAV = '#idealsteps-nav'
const LOADER_QUOTE_MSG = '#xLoaderQuote'
const LOADER_PRICE_MSG = '#xLoaderPrice'
const FORMS = '#insurance-form'
const age = faker.number.int({ min: 18, max: 70 })
const birthdate = new Date()
birthdate.setFullYear(birthdate.getFullYear() - age)
const formattedBirthdate = birthdate.toLocaleDateString("en-US")
const hobbies = [
    '#speeding',
    '#bungeejumping',
    '#cliffdiving',
    '#skydiving',
    '#other'
  ]
const priceOptions = [
    '#selectsilver',
    '#selectgold',
    '#selectplatinum',
    '#selectultimate'
]
const automobileInsurance = {
    make: faker.helpers.arrayElement(['Audi', 'BMW', 'Ford', 'Honda', 'Mazda', 'Mercedes Benz', 'Nissan', 'Opel', 'Porsche', 'Renault', 'Skoda', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo']),
    enginePerformance: faker.number.int({ min: 1, max: 2000 }),
    dateOfManufacture: faker.date.past({ years: 10 }).toLocaleDateString('en-US'),
    numberOfSeats: faker.number.int({ min: 1, max: 9 }),
    fuelType: faker.helpers.arrayElement(['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other']),
    lastPrice: faker.number.int({ min: 500, max: 100000 }),
    annualMileage: faker.number.int({ min: 100, max: 100000 }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName().replace(/[^a-zA-Z ]/g, ''),
    age,
    birthdate: formattedBirthdate,
    gender: faker.datatype.boolean(),
    country: faker.location.country(),
    zipcode: faker.number.int({ min: 1000, max: 99999999 }).toString(),
    occupation: faker.helpers.arrayElement(['Employee', 'Public Official', 'Farmer', 'Unemployed', 'Selfemployed']),
    selectedHobbies: faker.helpers.arrayElements(hobbies, { min: 1, max: hobbies.length }),
    startDate: faker.date.future({ years: 2 }).toLocaleDateString('en-US'),
    insuranceSum: faker.helpers.arrayElement(['3000000', '5000000', '7000000', '10000000', '15000000', '20000000', '25000000', '30000000', '35000000']),
    meritRating: faker.helpers.arrayElement(['Super Bonus', 'Bonus 1', 'Bonus 2', 'Bonus 3', 'Bonus 4', 'Bonus 5', 'Bonus 6', 'Bonus 7', 'Bonus 8', 'Bonus 9', 'Malus 10', 'Malus 11', 'Malus 12', 'Malus 13', 'Malus 14', 'Malus 15', 'Malus 16', 'Malus 17']),
    damageInsurance: faker.helpers.arrayElement(['No Coverage', 'Partial Coverage', 'Full Coverage']),
    optionalProducts: faker.helpers.arrayElements([INPUT_EURO_PROTECTION, INPUT_LEGAL_DEFENSE_INSURANCE], { min: 1, max: 2 }),
    courtesyCar: faker.helpers.arrayElement(['No', 'Yes']),
    RADIO_PRICE_OPTIONS: faker.helpers.arrayElement(priceOptions),
    email: faker.internet.email(),
    username: faker.internet.username().replace(/\./g, ''),
    password: faker.string.alphanumeric(3) + 
          faker.string.fromCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZ') + 
          faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz') + 
          faker.number.int({ min: 0, max: 9 }),

}

Cypress.Commands.add('PassoEnterVehicleData', () => {
    cy.get(SELECT_MAKE).select(automobileInsurance.make)
    cy.get(INPUT_ENGINE_PERFORMANCE).type(automobileInsurance.enginePerformance)
    cy.get(INPUT_DATE_OF_MANUFACTURE).type(automobileInsurance.dateOfManufacture)
    cy.get(SELECT_NUMBER_OF_SEATS).select(automobileInsurance.numberOfSeats)
    cy.get(SELECT_FUEL_TYPE).select(automobileInsurance.fuelType)
    cy.get(INPUT_LAST_PRICE).type(automobileInsurance.lastPrice)
    cy.get(INPUT_ANNUAL_MILEAGE).type(automobileInsurance.annualMileage)
    cy.get(BTN_NEXT_INSURANT_DATA).click({timeout: 10000})
})

Cypress.Commands.add('PassoEnterInsuranceData', () => {
    cy.get(INPUT_FIRST_NAME).type(automobileInsurance.firstName)
    cy.get(INPUT_LAST_NAME).type(automobileInsurance.lastName)
    cy.get(INPUT_BIRTHDATE).type(automobileInsurance.birthdate)
    if (automobileInsurance.gender === true) {
        cy.get(RADIO_MALE).click({force: true})
    } else {
        cy.get(RADIO_FEMALE).click({force: true})
    }
    cy.get(SELECT_COUNTRY).select(automobileInsurance.country)
    cy.get(INPUT_ZIPCODE).type(automobileInsurance.zipcode)
    cy.get(SELECT_OCCUPATION).select(automobileInsurance.occupation)
    automobileInsurance.selectedHobbies.forEach(hobby => {
        cy.get(hobby).check({force: true})
    })
    cy.get(BTN_NEXT_PRODUCT_DATA).click({timeout: 10000})
})

Cypress.Commands.add('PassoEnterProductData', () => {
    cy.get(INPUT_START_DATE).type(automobileInsurance.startDate)
    cy.get(SELECT_INSURANCE_SUM).select(automobileInsurance.insuranceSum)
    cy.get(SELECT_MERIT_RATING).select(automobileInsurance.meritRating)
    cy.get(SELECT_DAMAGE_INSURANCE).select(automobileInsurance.damageInsurance)
    automobileInsurance.optionalProducts.forEach(product => {
        cy.get(product).click({ force: true })
    })
    cy.get(SELECT_COURTESY_CAR).select(automobileInsurance.courtesyCar)
    cy.get(BTN_NEXT_SELECT_PRICE).click({timeout: 10000})
})

Cypress.Commands.add('PassoSelectPriceOption', () => {
    cy.get(automobileInsurance.RADIO_PRICE_OPTIONS).click({force: true})
    cy.get(BTN_NEXT_SEND_QUOTE).click({timeout: 10000})
})

Cypress.Commands.add('PassoSendQuote', () => {
    cy.get(INPUT_EMAIL).type(automobileInsurance.email)
    cy.get(INPUT_USERNAME).type(automobileInsurance.username)
    cy.get(INPUT_PASSWORD).type(automobileInsurance.password, {log: false})
    cy.get(INPUT_CONFIRM_PASSWORD).type(automobileInsurance.password, {log: false})
})

Cypress.Commands.add('PassoSendQuoteMalPreenchido', () => {
    const campos = [
        { selector: INPUT_EMAIL, value: automobileInsurance.email },
        { selector: INPUT_USERNAME, value: automobileInsurance.username },
        { selector: INPUT_PASSWORD, value: automobileInsurance.password, options: { log: false } },
        { selector: INPUT_CONFIRM_PASSWORD, value: automobileInsurance.password, options: { log: false } }
    ]

    const campoParaDeixarVazio = Cypress._.sample(campos)

    campos.forEach(campo => {
        if (campo === campoParaDeixarVazio) {
            cy.get(campo.selector).clear()
        } else {
            cy.get(campo.selector).type(campo.value, campo.options || {})
        }
    })
})


Cypress.Commands.add('enviarQuote', () => {
    cy.get(BTN_SEND_EMAIL).click({ timeout: 10000 })
})

Cypress.Commands.add('validaSucessoEnvioEmail', () => {
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    const fileName = `cypress/fixtures/C01-automobileInsurance-${timestamp}.json`
    const testData = {
        automobileInsurance,
        testStatus: 'PENDING',
        testMessage: '',
    }
    
    cy.get('h2', { timeout: 10000 })
      .should('contain.text', 'e-mail')
      .and('contain.text', 'success')
      .then(() => {
        testData.testStatus = 'Successo'
        testData.testMessage = 'Email enviado com sucesso'

        cy.writeFile(fileName, testData)
      })   
})

Cypress.on('fail', (error, runnable) => {
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    const fileName = `cypress/fixtures/Fail-automobileInsurance-${timestamp}.json`
    const testData = {
        automobileInsurance,
        testStatus: 'Falha',
        testMessage: error.message,
    }
    cy.writeFile(fileName, testData)
    throw error
})


Cypress.Commands.add('clicaCategory', step => {
    cy.get(STEPS_NAV).contains(step).click()
})

Cypress.Commands.add('LoaderMessagem', message => {
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    let fileName = `cypress/fixtures/C02-automobileInsurance-${timestamp}.json`
    let selector = 'p'
    
    if (message.includes('quote')) {
        fileName = `cypress/fixtures/C03-automobileInsurance-${timestamp}.json`
        selector = LOADER_QUOTE_MSG
    } else if (message.includes('price')) {
        fileName = `cypress/fixtures/C04-automobileInsurance-${timestamp}.json`
        selector = LOADER_PRICE_MSG
    }

    const testData = {
        testStatus: 'PENDING',
        testMessage: '',
    }

    cy.get(selector, { timeout: 10000 })
        .should('contain.text', message)
        .then(() => {
            testData.testStatus = 'Successo'
            testData.testMessage = 'A mensagem obtida é: ' + message
        })
        cy.writeFile(fileName, testData)
})


Cypress.Commands.add('formularioVazio', () => {
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    const fileName = `cypress/fixtures/C05-automobileInsurance-${timestamp}.json`
    const testData = {
        testStatus: 'PENDING',
        testMessage: '',
    }
    const campos = [
        INPUT_FIRST_NAME,
        INPUT_LAST_NAME,
        INPUT_BIRTHDATE,
        INPUT_ZIPCODE,
        INPUT_EMAIL,
        INPUT_USERNAME,
        INPUT_PASSWORD,
        INPUT_CONFIRM_PASSWORD
    ]

    campos.forEach(campo => {
        cy.get(campo).should('have.value', '')
    })

    const selects = [
        SELECT_MAKE,
        SELECT_NUMBER_OF_SEATS,
        SELECT_FUEL_TYPE,
        SELECT_COUNTRY,
        SELECT_OCCUPATION,
        SELECT_INSURANCE_SUM,
        SELECT_MERIT_RATING,
        SELECT_DAMAGE_INSURANCE,
        SELECT_COURTESY_CAR
    ]

    selects.forEach(select => {
        cy.get(select).should('have.value', 'default')
    })

    const checkboxesAndRadios = [
        RADIO_MALE,
        RADIO_FEMALE,
        INPUT_EURO_PROTECTION,
        INPUT_LEGAL_DEFENSE_INSURANCE,
        ...hobbies
    ]

    checkboxesAndRadios.forEach(element => {
        cy.get(element).should('not.be.checked')
        .then(() => {
            testData.testStatus = 'Successo'
            testData.testMessage = 'O formulário está vazio'
        })
    })
    cy.writeFile(fileName, testData)
})

Cypress.Commands.add('reenviarFormulario', () => {
    cy.fixture('C01-automobileInsurance-2025-04-06T20-16-28.157Z.json').then((data) => {
        const { automobileInsurance } = data

        cy.get(SELECT_MAKE).select(automobileInsurance.make)
        cy.get(INPUT_ENGINE_PERFORMANCE).type(automobileInsurance.enginePerformance)
        cy.get(INPUT_DATE_OF_MANUFACTURE).type(automobileInsurance.dateOfManufacture)
        cy.get(SELECT_NUMBER_OF_SEATS).select(automobileInsurance.numberOfSeats)
        cy.get(SELECT_FUEL_TYPE).select(automobileInsurance.fuelType)
        cy.get(INPUT_LAST_PRICE).type(automobileInsurance.lastPrice)
        cy.get(INPUT_ANNUAL_MILEAGE).type(automobileInsurance.annualMileage)
        cy.get(BTN_NEXT_INSURANT_DATA).click({ timeout: 10000 })

        cy.get(INPUT_FIRST_NAME).type(automobileInsurance.firstName)
        cy.get(INPUT_LAST_NAME).type(automobileInsurance.lastName)
        cy.get(INPUT_BIRTHDATE).type(automobileInsurance.birthdate)
        if (automobileInsurance.gender === true) {
            cy.get(RADIO_MALE).click({ force: true })
        } else {
            cy.get(RADIO_FEMALE).click({ force: true })
        }
        cy.get(SELECT_COUNTRY).select(automobileInsurance.country)
        cy.get(INPUT_ZIPCODE).type(automobileInsurance.zipcode)
        cy.get(SELECT_OCCUPATION).select(automobileInsurance.occupation)
        automobileInsurance.selectedHobbies.forEach(hobby => {
            cy.get(hobby).check({ force: true })
        })
        cy.get(BTN_NEXT_PRODUCT_DATA).click({ timeout: 10000 })

        cy.get(INPUT_START_DATE).type(automobileInsurance.startDate)
        cy.get(SELECT_INSURANCE_SUM).select(automobileInsurance.insuranceSum)
        cy.get(SELECT_MERIT_RATING).select(automobileInsurance.meritRating)
        cy.get(SELECT_DAMAGE_INSURANCE).select(automobileInsurance.damageInsurance)
        automobileInsurance.optionalProducts.forEach(product => {
            cy.get(product).click({ force: true })
        })
        cy.get(SELECT_COURTESY_CAR).select(automobileInsurance.courtesyCar)
        cy.get(BTN_NEXT_SELECT_PRICE).click({ timeout: 10000 })

        cy.get(automobileInsurance.RADIO_PRICE_OPTIONS).click({ force: true })
        cy.get(BTN_NEXT_SEND_QUOTE).click({ timeout: 10000 })

        cy.get(INPUT_EMAIL).type(automobileInsurance.email)
        cy.get(INPUT_USERNAME).type(automobileInsurance.username)
        cy.get(INPUT_PASSWORD).type(automobileInsurance.password, { log: false })
        cy.get(INPUT_CONFIRM_PASSWORD).type(automobileInsurance.password, { log: false })

        cy.get(BTN_SEND_EMAIL).click({ timeout: 10000 })
    })
})

Cypress.Commands.add('validaSucessoReenvioEmail', () => {
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    const fileName = `cypress/fixtures/C06-automobileInsurance-${timestamp}.json`
    const testData = {
        testStatus: 'PENDING',
        testMessage: '',
    }
    
    cy.get('h2', { timeout: 10000 })
      .should('contain.text', 'e-mail')
      .and('contain.text', 'success')
      .then(() => {
        testData.testStatus = 'Successo'
        testData.testMessage = 'Email reenviado com sucesso'

        cy.writeFile(fileName, testData)
      })   
})