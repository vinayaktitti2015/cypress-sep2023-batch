export const companyQuery = `{
    company {
      ceo
      coo
      cto
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      summary
    }
  }`

export const rocketQuery = `{
    rocket(id: "2") {
      active
      company
      boosters
      description
      country
      engines {
        engine_loss_max
        layout
        number
      }
      first_flight
    }
  }
      `

export const launchesQuery = `{
        launches {
          details
          id
          is_tentative
          launch_date_local
          launch_date_utc
          launch_date_unix
          launch_year
          launch_success
          mission_id
        }
      }
      `
