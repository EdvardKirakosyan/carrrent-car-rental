import { createServer, Model } from "miragejs"

createServer({
  models: {
    cars: Model,
  },

  seeds(server) {
    server.create("car", {
      id: "1",
      name: "Chevrolet Camaro (1969)",
      price: 60,
      description: "description",
      imageUrl: "https://i.ibb.co/QksVg7K/chevrolet-camaro-1969.png",
      type: "retro",
      hostId: "123",
    })
    server.create("car", {
      id: "2",
      name: "Audi RS4 (2022)",
      price: 80,
      description: "description",
      imageUrl: "https://i.ibb.co/QJwcgJQ/audi-rs4-2022-my.png",
      type: "sport",
      hostId: "123",
    })
    server.create("car", {
      id: "3",
      name: "Rolls Royce Cullinan (2018)",
      price: 100,
      description: "description",
      imageUrl: "https://i.ibb.co/ky8HWnj/rolls-royce-cullinan-2018-int.png",
      type: "lux",
      hostId: "456",
    })
    server.create("car", {
      id: "4",
      name: "Aston Martin DB9 GT (2016)",
      price: 65,
      description: "description",
      imageUrl: "https://i.ibb.co/6r1Tnxw/aston-martin-db9-gt-2016-fr.jpg",
      type: "lux",
      hostId: "789",
    })
    server.create("car", {
      id: "5",
      name: "Porsche 911 Turbo (2020)",
      price: 120,
      description: "description",
      imageUrl: "https://i.ibb.co/WnhRZ8k/porsche-911-turbo-2020-int.png",
      type: "sport",
      hostId: "789",
    })
    server.create("car", {
      id: "6",
      name: "Jaguar E Pace (2017)",
      price: 70,
      description: "description",
      imageUrl: "https://i.ibb.co/BLY88pJ/jaguar-e-pace-2017-fr.png",
      type: "lux",
      hostId: "123",
    })
  },

  routes() {
    this.namespace = "api"
    this.logging = false
    this.timing = 1000

    this.get("/cars", (schema, request) => {
      return schema.cars.all()
    })

    this.get("/cars/:id", (schema, request) => {
      const id = request.params.id
      return schema.cars.find(id)
    })

    this.get("/host/cars", (schema, request) => {
      // Hard-code the hostId for now
      return schema.cars.where({ hostId: "123" })
    })

    this.get("/host/cars/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.cars.findBy({ id, hostId: "123" })
    })
  },
})
