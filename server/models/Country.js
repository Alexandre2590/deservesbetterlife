const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
  NameCountry: { type: String },
  Dwellings_without_basic_facilities: { type: String } /*"Percentage"3*/,
  Housing_expenditure: { type: String } /*"Percentage"5*/,
  Rooms_per_person: {} /*"Ratio"7*/,
  Household_net_adjusted_disposable_income: { type: String } /* "US Dollar" 9*/,
  Household_net_wealth: { type: String } /*"US Dollar" 11*/,
  Labour_market_insecurity: { type: String } /*"Percentage" 13*/,
  Employment_rate: { type: String } /*"Percentage" 15*/,
  Personal_earnings: { type: String } /*"US Dollar" 19*/,
  Quality_of_support_network: { type: String } /*"Percentage" 21*/,
  Educational_attainment: { type: String } /*"Percentage" 23*/,
  Student_skills: { type: String } /*"Average score" 25*/,
  Years_in_education: { type: String } /*"Years" 27*/,
  Air_pollution: { type: String } /*"Micrograms per cubic metre" 29*/,
  Water_quality: { type: String } /*"Percentage" 31*/,
  Stakeholder_engagement_for_developing_regulations: {
    type: String,
  } /*"Average score" 33*/,
  Voter_turnout: { type: String } /*"Percentage" 35*/,
  Life_expectancy: { type: String } /*"Years" 37*/,
  Self_reported_health: { type: String } /*"Percentage" 39*/,
  Life_satisfaction: { type: String } /*"Average score" 41*/,
  Feeling_safe_walking_alone_at_night: { type: String } /*"Percentage" 43*/,
  Homicide_rate: { type: String } /*"Ratio" 45*/,
  Employees_working_very_long_hours: { type: String } /*"Percentage" 47*/,
  Time_devoted_to_leisure_and_personal_care: { type: String } /*"Hours" 49*/,
  Img:{type: String}
})

const Country = mongoose.model('Country', countrySchema)

module.exports = Country
