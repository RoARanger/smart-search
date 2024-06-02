# Smart Search

This project implements a smart search algorithm to extract entities from a search term.

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your Supabase credentials in `src/db.js`.
4. Run the application:
   ```sh
   node index.js "Your search term"
   ```

## Example

```sh
node index.js "veg pizza at McDonald's in London or Manchester"
