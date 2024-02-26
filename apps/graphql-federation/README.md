# GraphQL Federation

Create a federated GraphQL API (made up of other GraphQL APIs) that’s able to provide food and show ideas for a night in.

## Requirements

- One GraphQL service for each category (”food” and “shows”)
  - The data source for the food api service: https://www.themealdb.com/api.php
  - The data source for the shows api service: https://trakt.docs.apiary.io/#reference/shows/popular/get-popular-shows
- A gateway/router that stitches both “food” service and “shows” service into one federated GraphQL API
- Both queries for retrieving food and shows should return a random food item or show item respectively by default
- Users should be able to filter for specific food categories, where the random food item returned should respect these category filters
- Users should be able to provide a year range filter returned shows based on their release year, where the random show item returned should respect this year range filter
- Include unit tests
