export const fetchMovies = async (query: string = 'man', page: number = 1) => {
  const apiKey = '4a3b711b'
  const url = `https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()
  return data.Search
}
