export default async function fetchingData() {
  const res = await fetch("/api/cars")
  const data = await res.json()
  return data.cars
}
