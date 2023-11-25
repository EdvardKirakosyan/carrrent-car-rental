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
      description:
        "The first-generation Camaro was built through the 1969 model year. The Camaro's standard drivetrain was either a 230 cu in (3.8 L) straight-6 engine rated at 140 hp (104 kW) or a 327 cu in (5.4 L) (307 cu in (5.0 L) in later in 1969) V8 engine, with a standard three-speed manual transmission.",
      imageUrl: "https://i.ibb.co/QksVg7K/chevrolet-camaro-1969.png",
      type: "retro",
      hostId: "123",
    })
    server.create("car", {
      id: "2",
      name: "Audi RS4 (2022)",
      price: 80,
      description:
        "The Audi RS4 is an all wheel drive 4 door with 5 seats, powered by a 2.9L Twin Turbo V6 engine that has 331 kW of power (at 5700 rpm) and 600 Nm of torque (at 1900 rpm) via a 8 Speed Automatic Tiptronic.",
      imageUrl: "https://i.ibb.co/QJwcgJQ/audi-rs4-2022-my.png",
      type: "sport",
      hostId: "123",
    })
    server.create("car", {
      id: "3",
      name: "Rolls Royce Cullinan (2018)",
      price: 100,
      description:
        "The 2018 Rolls-Royce Cullinan was available in one variant, is classed as a Upper Large SUV and was built in United Kingdom. It uses Premium Unleaded Petrol fuel. The 2018 Rolls-Royce Cullinan was sold with an engine size of 6.7L and with turbocharged 12-cylinder.",
      imageUrl: "https://i.ibb.co/ky8HWnj/rolls-royce-cullinan-2018-int.png",
      type: "lux",
      hostId: "456",
    })
    server.create("car", {
      id: "4",
      name: "Aston Martin DB9 GT (2016)",
      price: 65,
      description:
        "The 2016 Aston Martin DB9 GT derives its power from an aluminum 6.0-liter V12 gasoline engine that sends 540 horsepower to the rear wheels. The engine is front mid-mounted (in front of the passengers but behind the front wheels) for an advantageous weight distribution and its contribution to superior handling.",
      imageUrl: "https://i.ibb.co/6r1Tnxw/aston-martin-db9-gt-2016-fr.jpg",
      type: "lux",
      hostId: "789",
    })
    server.create("car", {
      id: "5",
      name: "Porsche 911 Turbo (2020)",
      price: 120,
      description:
        "One vehicle that has impressive power and performance is the 2020 Porsche 911 Turbo. This model comes with a 3.8 Liter twin-turbo six-cylinder engine that is in the rear of the vehicle. The two exhaust turbochargers with variable turbine geometry help to deliver exceptional response, torque and performance.",
      imageUrl: "https://i.ibb.co/WnhRZ8k/porsche-911-turbo-2020-int.png",
      type: "sport",
      hostId: "789",
    })
    server.create("car", {
      id: "6",
      name: "Jaguar E Pace (2017)",
      price: 70,
      description:
        "The 2017 Jaguar E-Pace was available in thirty-eight variants, is classed as a Medium SUV and was built in England. Buyers could choose from both diesel or premium unleaded petrol engines. The 2017 Jaguar E-Pace was sold with an engine size of 2.0L and from turbocharged four-cylinders to four-cylinders.",
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
