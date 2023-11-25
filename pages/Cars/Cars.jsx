import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import fetchingData from "../../api"

export default function Cars() {
  const [cars, setCars] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [load, setLoad] = React.useState(false)

  const typeFilter = searchParams.get("type")

  React.useEffect(() => {
    const loadFn = async () => {
      setLoad(true)
      const data = await fetchingData()
      setCars(data)
      setLoad(false)
    }
    loadFn()
  }, [])

  const filtered = typeFilter
    ? cars.filter((car) => car.type === typeFilter)
    : cars

  const carElements = filtered.map((car) => (
    <div key={car.id} className="car-tile">
      <Link
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        to={car.id}
      >
        <img src={car.imageUrl} />
        <div className="car-info">
          <h3>{car.name}</h3>
          <p>
            ${car.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`car-type ${car.type} selected`}>{car.type}</i>
      </Link>
    </div>
  ))

  function filterHandle(key, value) {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key)
      } else {
        prev.set(key, value)
      }
      return prev
    })
  }

  if (load) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="car-list-container">
      <h1>Our car options</h1>
      <div className="car-list-filter-buttons">
        <button
          className={`car-type sport ${
            typeFilter === "sport" ? "selected" : ""
          }`}
          onClick={() => filterHandle("type", "sport")}
        >
          Sport
        </button>
        <button
          className={`car-type lux ${typeFilter === "lux" ? "selected" : ""}`}
          onClick={() => filterHandle("type", "lux")}
        >
          Lux
        </button>
        <button
          className={`car-type retro ${
            typeFilter === "retro" ? "selected" : ""
          }`}
          onClick={() => filterHandle("type", "retro")}
        >
          Retro
        </button>
        {typeFilter && (
          <button
            className="car-type clear-filters"
            onClick={() => filterHandle("type", null)}
          >
            clear
          </button>
        )}
      </div>
      <div className="car-list">{carElements}</div>
    </div>
  )
}
