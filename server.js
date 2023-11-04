import { createServer, Model } from "miragejs"

createServer({
  models: {
    vans: Model,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Chevrolet Camaro (1969)",
      price: 60,
      description: "description",
      imageUrl: "/assets/images/Chevrolet Camaro (1969).png",
      type: "retro",
      hostId: "123",
    })
    server.create("van", {
      id: "2",
      name: "Audi RS4 (2022)",
      price: 80,
      description: "description",
      imageUrl: "/assets/images/Audi-RS4-2022-MY.png",
      type: "sport",
      hostId: "123",
    })
    server.create("van", {
      id: "3",
      name: "Rolls Royce Cullinan (2018)",
      price: 100,
      description: "description",
      imageUrl: "/assets/images/Rolls-Royce-Cullinan-2018-INT.png",
      type: "lux",
      hostId: "456",
    })
    server.create("van", {
      id: "4",
      name: "Aston Martin DB9 GT (2016)",
      price: 65,
      description: "description",
      imageUrl: "/assets/images/Aston Martin DB9 GT (2016) FR.jpg",
      type: "lux",
      hostId: "789",
    })
    server.create("van", {
      id: "5",
      name: "Porsche 911 Turbo (2020)",
      price: 120,
      description: "description",
      imageUrl: "/assets/images/Porsche-911-Turbo-2020-INT.png",
      type: "sport",
      hostId: "789",
    })
    server.create("van", {
      id: "6",
      name: "Jaguar E Pace (2017)",
      price: 70,
      description: "description",
      imageUrl: "/assets/images/Jaguar-E-Pace-2017-FR.png",
      type: "lux",
      hostId: "123",
    })
  },

  routes() {
    this.namespace = "api"
    this.logging = false

    this.get("/vans", (schema, request) => {
      return schema.vans.all()
    })

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id
      return schema.vans.find(id)
    })

    this.get("/host/vans", (schema, request) => {
      // Hard-code the hostId for now
      return schema.vans.where({ hostId: "123" })
    })

    this.get("/host/vans/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.vans.findBy({ id, hostId: "123" })
    })
  },
})
