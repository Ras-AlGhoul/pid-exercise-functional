
const {nameOfGovEmails, numberOfFemales, averageAge} = require('./Main.js'); // Use the path to your submission file

test('numerOfFemales should count correct number of females', () => {
  expect(numberOfFemales([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 9, first_name: 'Amanda', last_name: 'Gownge', email: 'agownge8@t.co', gender: 'Female', ip_address: '246.160.41.135', age: 95,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
  ])).toBe(3);
});

//---------------------------------------------------------------------------------------------------------------------------------------------

test('nameOfGovEmails should display the first name, the last name and ip_address of people with goverment emails', () => {
    expect(nameOfGovEmails([
      {
        id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.gov.cn', gender: 'Female', ip_address: '12.246.212.112', age: 54,
      },
      {
        id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.org', gender: 'Male', ip_address: '60.16.88.134', age: 24,
      },
      {
        id: 9, first_name: 'Amanda', last_name: 'Gownge', email: 'agownge8@t.co', gender: 'Female', ip_address: '246.160.41.135', age: 95,
      },
      {
        id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.gov', gender: 'Female', ip_address: '82.56.248.7', age: 30,
      },
    ])).toMatchObject([
        {
             firstName: 'Minne', lastName: 'MacGilfoyle', ip_address: '12.246.212.112'
          },
          {
             firstName: 'Tybie', lastName: 'Tille', ip_address: '82.56.248.7'
          }
    ]);
  });

//---------------------------------------------------------------------------------------------------------------------------------------------

  test('averageAge should give the average age of data', () => {
    expect(averageAge([
      {
        id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
      },
      {
        id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
      },
      {
        id: 9, first_name: 'Amanda', last_name: 'Gownge', email: 'agownge8@t.co', gender: 'Female', ip_address: '246.160.41.135', age: 95,
      },
      {
        id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
      },
    ])).toBe(50.75);
  });