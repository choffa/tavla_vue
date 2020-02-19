import gql from 'graphql-tag'

export const GET_REALTIME_DATA = gql`
query getRealtimeData {
  stopPlaces(ids: [
    		"NSR:StopPlace:25944", 
    		"NSR:StopPlace:44085", 
    		"NSR:StopPlace:58366",
  			"NSR:StopPlace:58195"
  ]) {
    id
    name
    estimatedCalls(timeRange: 72100, numberOfDepartures: 10, omitNonBoarding: true) {
      realtime
      aimedDepartureTime
      expectedDepartureTime
      destinationDisplay {
        frontText      
      }
      serviceJourney {
        id
        line {
          id
          transportMode
          publicCode
          presentation {
            colour
            textColour
          }
        }
      }
    }
  }
}
`;