use mind_me;
db.dropDatabase();

db.animals.insertMany([
  {
    label: "Turtle",
    link: "https://drive.google.com/file/d/1q5WQuvSZ1voPjepW7ORgkyixbhRPvGWo/view?usp=sharing",
  },
  {
    label: "Mouse",
    link: "https://drive.google.com/file/d/1hn4tsCNTCDN61wH9dCpPF1uLrkBiYm3k/view?usp=sharing",
  },
  {
    label: "Elephant",
    link: "https://drive.google.com/file/d/12tgYPm4PJ-jM92Af2PvbxBZe9AhvB8cJ/view?usp=sharing",
  },
  {
    label: "Dolphin",
    link: "https://drive.google.com/file/d/1EkGI5fQl4MdInqCaBORbU9SFQEtET7nB/view?usp=sharing",
  },
  {
    label: "Bee",
    link: "https://drive.google.com/file/d/16iJ6IGAlD11Boh-qmx9ijP0bPcPiUI8D/view?usp=sharing",
  },
  {
    label: "Badger",
    link: "https://drive.google.com/file/d/1M_OYyiSiaIawcO8QH96xZY0QyW362OzI/view?usp=sharing",
  },
  {
    label: "Snow Leopard",
    link: "https://drive.google.com/file/d/14a4DLrG76Jr0HT2fpI_lm_MmDlbwInT5/view?usp=sharing",
  },
  {
    label: "Snake",
    link: "https://drive.google.com/file/d/118ixO_9JTpP6npVX5h9duyQUJoGVeWdf/view?usp=sharing",
  },
  {
    label: "Red Panda",
    link: "https://drive.google.com/file/d/1UMSpC_5KjYaR7Y-smeCCRXApoT4VTZX4/view?usp=sharing",
  },
  {
    label: "Rabbit",
    link: "https://drive.google.com/file/d/1v3OiLUayVwalZoaBLMr9OOJGHnT5auDG/view?usp=sharing",
  },
  {
    label: "Parrot",
    link: "https://drive.google.com/file/d/1kT9XXhgoLhsW-wzmvW_m1BpGiuEhdhRB/view?usp=sharing",
  },
  {
    label: "Owl",
    link: "https://drive.google.com/file/d/1yMtuBDXpopybwW7jBX53CZO6vyQkC5qP/view?usp=sharing"
  },
  {
    label: "Otters",
    link: "https://drive.google.com/file/d/10cijYlmh9TN01shX2g_s_HI0hAFSz8Ht/view?usp=sharing"
  },
  {
    label: "Llama",
    link: "https://drive.google.com/file/d/1oRfF2Kz113CWgViTFBEmi5tggyg8i1bl/view?usp=sharing"
  },
  {
    label: "Ladybird",
    link: "https://drive.google.com/file/d/1loFdC1nrkyApX841g01EXC2gngGrYGMR/view?usp=sharing"
  },
  {
    label: "Dog",
    link: "https://drive.google.com/file/d/1loFdC1nrkyApX841g01EXC2gngGrYGMR/view?usp=sharing"
  },
  {
    label: "Chameleon",
    link: "https://drive.google.com/file/d/1FQb5qF3nkZMt0iXJBtJAPA40QPPqPfwz/view?usp=sharing"
  },
  {
    label: "Butterfly",
    link: "https://drive.google.com/file/d/19GgcFMjyLCaRX62D1uf2sbbJafxnCPt-/view?usp=sharing"
  }
]);

db.food.insertMany([
  {
    label: "Coffee",
    link: "https://drive.google.com/file/d/1NklUk5I_EYe1oRydzaaCaLPK3u8PVH0b/view?usp=sharing",
  },
  {
    label: "Tacos",
    link: "https://drive.google.com/file/d/1j2nNp24E3rnmE1vHHxfzST-cljvu1h_y/view?usp=sharing",
  },
  {
    label: "Stuffed Eggplant",
    link: "https://drive.google.com/file/d/1znkNFBDv2Fo79CvmJrRYE4P4saxXddHq/view?usp=sharing",
  },
  {
    label: "Shish Kebab",
    link: "https://drive.google.com/file/d/1Cx4S6HyyaO8re35DnlocBqZx4zeWUqF0/view?usp=sharing",
  },
  {
    label: "Samosa",
    link: "https://drive.google.com/file/d/1UQ-jSpmzMvkbHlEiHqQchydYtu7qbJZu/view?usp=sharing",
  },
  {
    label: "Salmon",
    link: "https://drive.google.com/file/d/1Hn3avX_IK5kyD3G1cML3x4Iws5FePd0N/view?usp=sharing",
  },
  {
    label: "Red Velvet",
    link: "https://drive.google.com/file/d/1-M3NlaHp1p1P_xSTqNRXKFv-fg3MfXeU/view?usp=sharing",
  },
  {
    label: "Pizza",
    link: "https://drive.google.com/file/d/1gYn4ILIbpE2PzWwqanFA_qcnc0oQFnAD/view?usp=sharing",
  },
  {
    label: "Pasta",
    link: "https://drive.google.com/file/d/1WtQS9SrPU6gqOqsT4LLdoJ3QS3IOC9X4/view?usp=sharing",
  },
  {
    label: "Oats",
    link: "https://drive.google.com/file/d/1WetG-w-1Hz9x8mSP9mA7grcSJ186F64o/view?usp=sharing",
  },
  {
    label: "Menemen",
    link: "https://drive.google.com/file/d/1347tetNM01A0iCuCNPQ7LAlte74gfIe3/view?usp=sharing",
  },
  {
    label: "Lasagne",
    link: "https://drive.google.com/file/d/1KfwrPv8OeDnP8NiK7ehZCw1bWkoflpzK/view?usp=sharing",
  },
  {
    label: "Laddoo",
    link: "https://drive.google.com/file/d/1j-eB5CjnynB9Hz1l-Kmb_ZWnmRXfS3Ls/view?usp=sharing",
  },
  {
    label: "Fruit Loaf",
    link: "https://drive.google.com/file/d/1cX1LzzRZ5NRpqFW2dqsuxTBK02aw1K3t/view?usp=sharing",
  },
  {
    label: "Fries",
    link: "https://drive.google.com/file/d/1EUVo7IJP56IW6zq4LEnZ2VVk_iJa7j7F/view?usp=sharing",
  },
  {
    label: "Chocolate Cake",
    link: "https://drive.google.com/file/d/1XdqhsUePNoPNndpfVrvG3CBzPhW4YHSx/view?usp=sharing",
  },
  {
    label: "Burger",
    link: "https://drive.google.com/file/d/1nck7IDNHMtVd-038c9PdxWd9_r3-fjLJ/view?usp=sharing",
  },
  {
    label: "Avocado Toast",
    link: "https://drive.google.com/file/d/1EXKG5hKzbDr4S1Ra8gYdGs22mpisQIFO/view?usp=sharing",
  }
]);

db.locations.insertMany([
  {
    label: "Algrave",
    link: "https://drive.google.com/file/d/1pQJ42XrGo8Iyoa2bqfyU3EkaO2wAjg8w/view?usp=sharing",
  },
  {
    label: "Colosseum",
    link: "https://drive.google.com/file/d/1pddYKd5xUIBbpOq5d3LIOcZpuFtqFrCY/view?usp=sharing",
  },
  {
    label: "Victoria Falls",
    link: "https://drive.google.com/file/d/12PvF4eP7iAj1-Wv2T2JcpwRCaY7muR7J/view?usp=sharing",
  },
  {
    label: "Taj Mahal",
    link: "https://drive.google.com/file/d/1mfYCRr0MtcaORFQ5HE_Pt6M-67upiwdm/view?usp=sharing",
  },
  {
    label: "Stonehenge",
    link: "https://drive.google.com/file/d/1DbOE-RVTQZaEbSDD7Vuk352fyts63UNX/view?usp=sharing",
  },
  {
    label: "Statue of Liberty",
    link: "https://drive.google.com/file/d/1yTxCVL3iKLHDhHE-7xFZlbH1DuS_sstX/view?usp=sharing",
  },
  {
    label: "Sahara Desert",
    link: "https://drive.google.com/file/d/1tAlo15UBl0jhpomCrwWRouIcxX1MDemG/view?usp=sharing",
  },
  {
    label: "London Bridge",
    link: "https://drive.google.com/file/d/1qc-yY2gqz6bIAdBkPAvFtQvmWQ-OVRnw/view?usp=sharing"
  },
  {
    label: "Leaning tower of Pisa",
    link: "https://drive.google.com/file/d/1TVwMPxhXia3Wuyg8Wqxwk_jjbPx17psF/view?usp=sharing"
  },
  {
    label: "Kyoto",
    link: "https://drive.google.com/file/d/1txncNVWJD0oPUye1Qp3gsQzRPtONGhoI/view?usp=sharing"
  },
  {
    label: "Blue Lagoon",
    link: "https://drive.google.com/file/d/1_2DMxElppA0gUhY9zkCXOlzhzL9EJSFa/view?usp=sharing"
  },
  {
    label: "Burj Khalifa",
    link: "https://drive.google.com/file/d/1JmnyADqCPMS2aO-L5RemFcAqIJF-xU-8/view?usp=sharing"
  },
  {
    label: "Eiffel Tower",
    link: "https://drive.google.com/file/d/1rHKiGawY79JVDxhQjBs0CVuPkag-sNEP/view?usp=sharing"
  },
  {
    label: "Bora Bora",
    link: "https://drive.google.com/file/d/11spG0LMqq8zHyVDSi5vJsXOa8lblYhyC/view?usp=sharing"
  },
  {
    label: "Grand Canal",
    link: "https://drive.google.com/file/d/1XUZRLSxaqhTDHu8b9q7p8TNZYUr_c9Ui/view?usp=sharing"
  },
  {
    label: "Death Valley",
    link: "https://drive.google.com/file/d/1-_QrKz4BUQRZglVCshmFJAjvD6kytegl/view?usp=sharing"
  },
  {
    label: "Grand Canyon",
    link: "https://drive.google.com/file/d/1LClrSEvvLefAEWb3Qhu7cKvpdH-yvjrW/view?usp=sharing"
  },
  {
    label: "Christ the Redeemer",
    link: "https://drive.google.com/file/d/12X2uBEVY60THpI-j2z6MnHQW7ROhsw81/view?usp=sharing"
  }
])

db.celebs.insertMany([
  {
    label: "Boris",
    link: "https://drive.google.com/file/d/1PNs0gnhg3sbRjHjuDE9r3MDLrMC3iO0M/view?usp=sharing",
  },
  {
    label: "Trump",
    link: "https://drive.google.com/file/d/1CHtCNp9lKitScGI9TqETuaQPPPchzqi4/view?usp=sharing",
  },
  {
    label: "James",
    link: "https://drive.google.com/file/d/19erFp2bxd5DNML5ELk5BXeq8gvsfucGs/view?usp=sharing",
  },
  {
    label: "Jeremy",
    link: "https://drive.google.com/file/d/1bx5kgXwfMmQqdN-RxjRIbUqrY5sB_9op/view?usp=sharing",
  },
  {
    label: "Joffrey",
    link: "https://drive.google.com/file/d/1r53LEkPYom8uUA8dNC2O8sNSROeMCClY/view?usp=sharing",
  },
  {
    label: "Kanye",
    link: "https://drive.google.com/file/d/1Dx9CIL58FDkjy3GYrAdok5gPi7cgtJl6/view?usp=sharing",
  },
  {
    label: "Kermit",
    link: "https://drive.google.com/file/d/15Dv85SFnAh6GjETup7QY8Ky4ndbwIXDt/view?usp=sharing",
  },
  {
    label: "Kim",
    link: "https://drive.google.com/file/d/1zvBEOd6uS5r3IzdsHkBe-WdRe5EBBwUA/view?usp=sharing",
  },
  {
    label: "Lewis",
    link: "https://drive.google.com/file/d/1EiowKSG25hEcEanIIqb1wVJlBW509U16/view?usp=sharing",
  },
  {
    label: "Limmy",
    link: "https://drive.google.com/file/d/1xZu63XMfAMtklPfTZwZ7IDHJGCnOUO25/view?usp=sharing",
  },
  {
    label: "MGK",
    link: "https://drive.google.com/file/d/1gj5HCSSlyL18HFELBu7w4MyYmLNZJaFW/view?usp=sharing",
  },
  {
    label: "Megan",
    link: "https://drive.google.com/file/d/1eWhLZPtGQ3ueohiHnayIzMZJyzgrY3XA/view?usp=sharing",
  },
  {
    label: "Miss Piggy",
    link: "https://drive.google.com/file/d/1n3xCK2INslhcjdBHcAZalpnLFcRudPWY/view?usp=sharing",
  },
  {
    label: "Molly Mae",
    link: "https://drive.google.com/file/d/1_AYmlQhbvVq-o2CvrmSLzFGpwcldL9jf/view?usp=sharing",
  },
  {
    label: "Nicholas",
    link: "https://drive.google.com/file/d/1KT5trJ486RFMiZAGYmtf_ZrRUDnHYcM3/view?usp=sharing",
  },
  {
    label: "Nigel",
    link: "https://drive.google.com/file/d/1yoFmlINXxZD7pB5BVRKa2N-qxeSj_b4L/view?usp=sharing",
  },
  {
    label: "Pete",
    link: "https://drive.google.com/file/d/1mvDKYIXX2U4ObSZSKe3iToeNQV3TFmfk/view?usp=sharing",
  },
  {
    label: "Piers Morgan",
    link: "https://drive.google.com/file/d/1xHBP6JGlrBUE5PzG7nZfcMYW0ysb5wC7/view?usp=sharing",
  }

]);

