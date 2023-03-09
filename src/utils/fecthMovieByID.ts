export const fetchMovieByID = async (id: string) => {
  const apiKey = '4a3b711b'
  const url = `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
