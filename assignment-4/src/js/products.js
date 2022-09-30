/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  //////////////////////////////Rose//////////////////////////////
  {
    id: "P1",
    title: "Lamborghini",
    description: `The Lamborghini car has the reputation of being one of the fastest cars to grace the motor racing world, with the Aventador achieving the Lamborghini top speed of 349 kmph. Lamborghini India imports the cars and sells them off the shelf. `,
    price: "256986",
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P2",
    title: "lamborghini aventador",
    description: `The Aventador powertrain features a mid-mounted naturally aspirated 6.5-liter V-12 that develops 769 horsepower. The engine's 531 pound-feet of torque makes its way to all four wheels via a seven-speed automated-manual transmission.`,
    price: "464009",
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P3",
    title: "lamborghini huracan",
    description: `A naturally aspirated 5.2-liter V-10 is nestled behind the Huracán's cabin, and it exudes a devilish sound whenever it revs towards its 8500-rpm redline. The engine develops 602 horsepower on most rear-drive models, but the rear-drive-only Tecnica and the all-wheel-drive STO have 631 horses.`,
    price: "245245",
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P4",
    title: "lamborghini urus",
    description: `Lamborghini Urus is the first Super Sport Utility Vehicle in the world to merge the soul of a super sports car with the functionality of an SUV. Powered by a 4.0-liter twin-turbo V8 engine producing 650 CV and 850 Nm of torque, Urus accelerates from 0 to 62 mph in 3.6 seconds and reaches a top speed of 190 mph.`,
    price: "256986",
    discontinued: false,
    categories: ["c1"]
  },

  //////////////////////////////Ferrari//////////////////////////////
  {
    id: "P6",
    title: "Ferrari",
    description: `Ferrari has traded the naturally breathing V-8 for one that is aided by a turbocharger. The change comes for two reasons: it produces less carbon dioxide, and it allows for even more power out of the V-8 without having to make it physically bigger.`,
    price: "264670",
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P7",
    title: "Ferrari 812 Superfast",
    description: `Ferrari claims that the 812 Superfast has a top speed of 340 km/h (211 mph) with a 0–100 km/h (0–62 mph) acceleration time of 2.9 seconds. The car has a power to weight ratio of 2.18 kg (4.81 lb) per horsepower (PS). The 812 Superfast is the first Ferrari equipped with EPS (Electronic Power Steering).`,
    price: "452523",
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "P8",
    title: "Ferrari 812 GTS",
    description: `The Ferrari 812 GTS gets its muscle from a 789-hp 6.5-liter V-12, which delivers a bracing 530 pound-feet of torque to the rear wheels via a seven-speed dual-clutch automatic`,
    price: "469318",
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P9",
    title: "Ferrari F8 Tributo",
    description: `The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta. `,
    price: "322562",
    discontinued: false,
    categories: ["c2"]
  },

  //////////////////////////////Begatti//////////////////////////////
  {
    id: "P11",
    title: "Bugatti",
    description: `The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in France by the Volkswagen Group and Bugatti and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron.`,
    price: "1914000",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P12",
    title: "Bugatti Vision",
    description: `All Chiron models are motivated by an 8.0-liter 16-cylinder powerplant. This beast of an engine employs four turbochargers to generate a mighty 1500 horsepower and 1180 pound-feet of torque. Bugatti claims that the Chiron makes the dash from zero to 60 mph in a mere 2.3 seconds, and it has a top speed of 261 mph.`,
    price: "18000000",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P13",
    title: "Bugatti Bolide",
    description: ` Bolide could hit 100 km/h (62 mph) in 2.17 seconds, 200 km/h (124 mph) in 4.36 seconds, 300 km/h (186 mph) in 7.37 seconds, 248 mph (400 km/h) in 12.08 seconds, and 310 mph (500 km/h) in 20.16 seconds.`,
    price: "5900000 ",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P14",
    title: "Bugatti Centodieci",
    description: `the engine is tuned to deliver 1,577 hp, or 97 hp more than the Chiron, and Bugatti claims the car will accelerate from 0-62 mph in 2.4 seconds, from 0-124 mph in 6.1 seconds, and from 0-186 mph in 13.1 seconds. The top speed is governed to 236 mph.`,
    price: "11700000",
    discontinued: true,
    categories: ["c3"]
  },

  //////////////////////////////Porsche//////////////////////////////
  {
    id: "P16",
    title: "Porsche",
    description: `Porsche is a German luxury and sports car manufacturer, based in Stuttgart and founded in 1931. The company is best known for its powerful, precise-handling sports cars, most famously the iconic 911`,
    price: "707000",
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P17",
    title: "Porsche 911",
    description: `its own engine seated behind the rear axle, the Porsche 911 offers a driving experience that no other car can match. The resulting weight distribution allows a skilled 911 pilot to lower power earlier in a turn than would be possible with any other setup.`,
    price: "121200",
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P18",
    title: "porsche panamera",
    description: `Most models come with a turbocharged V-6 but a 473-hp twin-turbo V-8 is also available, as is a plug-in hybrid with up to 552 horsepower. `,
    price: "103400",
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P19",
    title: "Porsche 718 Cayman",
    description: `The base model comes with a turbocharged 2.0 liter flat 4-cylinder engine, packing 300 horsepower and 280 pounds-feet of torque propelling you from 0 to 60 in 4.9 seconds flat.`,
    price: "707800",
    discontinued: true,
    categories: ["c4"]
  },

  //////////////////////////////McLaren//////////////////////////////
  {
    id: "P20",
    title: "McLaren",
    description: `McLaren is known for developing composite materials that are light and agile to its car. The first Formula One car to feature a carbon fiber monocoque chassis was built in 1981 by McLaren, which saw its first win at the British Grand Prix.`,
    price: "196500540",
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "P21",
    title: "McLaren 720S",
    description: `Both the coupe and convertible version cradle a twin-turbocharged 4.0-liter V-8 that produces 710 horsepower and 568 pound-feet of torque. Those totals are funneled through a paddle-shifted seven-speed dual-clutch automatic transmission. The 720S coupe we tested at our track rocketed to 60 mph in 2.6 seconds and reached 100 mph in 5.2 ticks. `,
    price: "343646",
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "P22",
    title: "McLaren Artura",
    description: `The Artura is powered by a new hybrid twin-turbo V-6 that makes a combined 671 horsepower and 531 pound-feet of torque.we'd have preferred it get us to 60 mph in an estimated 2.6 seconds with a little more drama`,
    price: "274900",
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "P23",
    title: "McLaren Elva",
    description: `Its wild and unconventional design can easily distract from the Elva's remarkable performance credentials. This includes its twin-turbocharged 4.0-liter V-8 that produces 804 horsepower and 590 lb-ft of torque. The engine hooks up to a seven-speed dual-clutch automatic transmission that powers the rear wheels. McLaren claims the Elva will accelerate from zero to 62 mph in less than three seconds and from zero to 124 mph in just 6.7 seconds. `,
    price: "1684000 ",
    discontinued: true,
    categories: ["c5"]
  }
];
