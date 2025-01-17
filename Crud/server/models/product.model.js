import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    default:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAAY1BMVEX///8AAAD8/Pw5OTnc3NwEBAT4+PgICAjz8/Pt7e2hoaHo6OjJycmYmJiJiYl/f39lZWUyMjISEhK6uroZGRlJSUmqqqri4uLT09MgICDBwcFOTk4nJydxcXFYWFi0tLRAQEB79/wqAAAF6klEQVR4nO2biXKjMAyGscHG3FcChJDj/Z9yLRkS0mko2QaizvjbLt0Ewv6oQkiy6jgWi8VisVgsFovFYrFYLBaL5Tdw/cXhu3QcOXkfXuL7HI+hCWgzKrXaIGoar2miQBrFuIesdANavYnrLD+6hXvMszpuRssThnMupcODts4Ln434RV63AXek5JzsBaDLSNUm+1G2GP+xT1olKTsNB38J6vNB29pnQjDhC/imX7DDuQ7Ab8hq19KaxDX2BpMLIe4v3KThDjmn4cOXducmO7BnHLIGHH48mgpjWPe0dPFEutDivXugpwIfYnqQlmxGOyvTwHg8Je0Oxm8Z9niXfg/s6EN5u1AiwGNUP35il/kQWp7YXe9jbkwtNdBKlPaYDEPL03sVd2UBHktKu/aF6qDNLp6Kh10+O1TSkYS0cxQTZez5jXq7XVkW4aVSEY86uLeb1T2y8+RP59sWsGS4SDpjISWXcUwmky/UnpMKMxj1lLtQe08tzGh3n79NJ3jjZyiAOrql0ln3ab1TMLW9LNZ+oWP1IRVbGmZ0oHFIidd/6sXaa4dW+cRf8ndqNbe3ULmAOENHOwqJ+oXi++jTeqdgfFeLn6uKjNGdMRdLFmpPKEk3JZ8TH7C8mMnfcd8hJlWxGu1RrkvSH7TrmjWPoE4hox271JxffObPFh9C7/cv0A9WnxY8QUIRCoYv2UytzUo0u8IK8dOSBzCfUQ7vCjDsjHafFZ1pw3MqxdPQpeMqmS9Y9b4EvYVQ5TQUQpxHpxnlwCka13TIMBre8c6z0s/e2FiipB7g2uXjvLy1aB62mjKP9W1BxVm+om/aNhvyGmgkAf4Y8PuspRTWv4DSvORaYlC5Gx1CT3lNPIfUM+kRjuuQqssKxvzxAQtrNowVWadwL1XtzlBUNFV2nDbJdsesam576cIBJ2jrNN+7/aF393lat8HwPmG40Y7bwGvjruvi1gvGt2g1xL5lHCuYvPMHVE+4ewhxX3nkLnUq+w9dwN8FowrOPuDmL3nN38UYGSY6ADksLdE1/YNXcBV5cXcJwyRJwvDSxV70kD4ScyEsJzCwB16sn6nHYjeub/u74qifrbF5Rg1L4HTARUoJRatXpXlRflN2lEWeVp6CSpXSEiXqAVScDLNWQ/0xbk0u7Bd5EisTgsi4jYmCUZXt/bFIumXw0yEgLX+fVRGtvAy8pTu5Q7Y+uQB2bxz4Q0bvniCTpyNdV0spOosY58QeujTCH+fGBLpO6hEKmao+luNYmJkPE3eDDz3U+z5WHmsKTT2MemZITDwb+nkEbX/IGufDg28cppBkdfahPl0OHH6uINZ8MlbqYKfq6+zEz3fA4dda8Y+GeS6j0B3uwaXy8Vh9T7th9EntkgdJb1z4FcMP0b9Pgg92JnmUFEa1WCxfjB4mWJFEnzN8ANKFyQDEwtsVlkbMB0B8sL1orPslr2GxgD0+PxdZ3mx9VtS3IdvttMP/qOIr+O1rIWZ6Cfo+ucZy40BvAnN7nl+U/EG6+eS5NY+J7cRjrp69HmEe7Y7RJlMbrz5BQ7cuX4guz8Tr5Kbmmy7iaJ9xPJdNC4v/UD4M9rvepkuW2lIwhSpeTga+yDc/tizatC2vnKq/LyX9t3BDX227zg0TJ78x+eQafJZvKZ07l+Jt2hkrLpv6zOm3vn6TDic6bWn4zmU/zGwsR8f4a7yddA6/k/JKpfSD9jLdzme8M6aNb/EZPM/Z20x7VbxB9ZSi2kI2duRS/11RBsBffFIb9Mogb2py9mbtLG+GLuuKyvFv93pnYFY4dA06nDVYU7w5d7h7pUBddAG7cHL+1bTrHDKd2Oz3us1ZUrm2djx7dHq5RJ0Vj9tTtP6EylDrvR2s/db1GYhjusS+2+sNoNfotGDtKAknf/uTCXArrMZWlQ6/ldJjc+itsP7CV6+e9AOk3q2gfVevPZGFgzDhd2uQv0WE60+Wc67qvft+oB2/qnDTwgq8NQjWXgWBfGkl+0haE/0Wi8VisVgsFovFYrFYLBYLVf4B7Cg/Kg3H6EIAAAAASUVORK5CYII=",
  },
  email: { type: String, required: true },
  password: { type: Number, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  language: { type: Array, required: true },
  hobbies: { type: Array, required: true },
  date: { type: String, required: true },
  userId: { type: Number, required: true, default: 1 },
});

const ProductModel = mongoose.model("UserDetails", ProductSchema);

export default ProductModel;
