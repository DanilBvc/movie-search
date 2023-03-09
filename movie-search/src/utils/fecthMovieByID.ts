export const fetchMovieByID = async (id: string) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
