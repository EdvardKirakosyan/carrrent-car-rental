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
      imageUrl: "/src/assets/images/chevrolet-camaro-1969.png",
      type: "retro",
      hostId: "123",
    })
    server.create("van", {
      id: "2",
      name: "Audi RS4 (2022)",
      price: 80,
      description: "description",
      imageUrl: "/src/assets/images/audi-rs4-2022-my.png",
      type: "sport",
      hostId: "123",
    })
    server.create("van", {
      id: "3",
      name: "Rolls Royce Cullinan (2018)",
      price: 100,
      description: "description",
      imageUrl: "/src/assets/images/rolls-royce-cullinan-2018-int.png",
      type: "lux",
      hostId: "456",
    })
    server.create("van", {
      id: "4",
      name: "Aston Martin DB9 GT (2016)",
      price: 65,
      description: "description",
      imageUrl: "/src/assets/images/aston-martin-db9-gt-2016-fr.jpg",
      type: "lux",
      hostId: "789",
    })
    server.create("van", {
      id: "5",
      name: "Porsche 911 Turbo (2020)",
      price: 120,
      description: "description",
      imageUrl: "/src/assets/images/porsche-911-turbo-2020-int.png",
      type: "sport",
      hostId: "789",
    })
    server.create("van", {
      id: "6",
      name: "Jaguar E Pace (2017)",
      price: 70,
      description: "description",
      imageUrl: "/src/assets/images/jaguar-e-pace-2017-fr.png",
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
