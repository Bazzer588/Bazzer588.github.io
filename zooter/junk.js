
// values and props combined for each field - requires complex mapping in and out of form state

const formState = {
    lastName: { value: 'Jones', touched: true },
    dateOfBirth: { value: { day: '11', month: '7', year: '1982' }, touched: true },
    mobilePhone: { value: { countryCode: '+44', telephone: '' } },
    currentAddress: {
        value: {
            street: {},
            city: { value: 'Shanghai', touched: true },
            postcode: { touched: true }
        }
    },
    employmentHistory: [  // repeating section
        {...},
        {...}
    ]
};

// separate values and props - no mapping required

const formState2 = {
    values: {
        lastName: 'Jones',
        dateOfBirth: { day: '11', month: '7', year: '1982' },
        mobilePhone: { countryCode: '+44', telephone: '' },
        currentAddress: {
            street: '',
            city: 'Shanghai',
            postcode: ''
        },
        employmentHistory: [
            { role: 'Engineer', company: '' },
            { role: 'Consultant', company: 'BJSS' },
        ]
    },
    props: {
        lastName: { touched: true },
        dateOfBirth: { touched: true },
        mobilePhone: {},
        currentAddress: {
            street: {},
            city: { touched: true },
            postcode: { touched: true }
        },
        employmentHistory: [
            { role: { touched: true }, company: { touched: true}  },
            {}
        ]
    }
};

export default {formState,formState2};
