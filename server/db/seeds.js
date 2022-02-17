use mind_me;
db.dropDatabase();

db.animals.insertMany([
  {
    label: "Turtle",
    link: "https://drive.google.com/uc?id=1rD90U98wwZm0LDfop7p_dZn7RQGyMPFW",
  },
  {
    label: "Mouse",
    link: "https://drive.google.com/uc?id=11DlORlmx_eHFKgFslqBXjx0AbYsCXh6N",
  },
  {
    label: "Elephant",
    link: "https://drive.google.com/uc?id=1dH95W2fgJWSZDQ8G8SOTJkGzurFVWMXH",
  },
  {
    label: "Dolphin",
    link: "https://drive.google.com/uc?id=1Lt0v8lrXtTR769foZSNhPqfwXD-Du97l",
  },
  {
    label: "Bee",
    link: "https://drive.google.com/uc?id=1J0MUoR6tc5pqxTlX81LoxbYnuyqCdzjo",
  },
  {
    label: "Badger",
    link: "https://drive.google.com/uc?id=1fmX2L0ezAaqDnAl949vxtHC1pkuY6gSw",
  },
  {
    label: "Snow Leopard",
    link: "https://drive.google.com/uc?id=10EzatXknlkF12MOiwgfP7pQkYi-JAc2y",
  },
  {
    label: "Snake",
    link: "https://drive.google.com/uc?id=1x_QHnrHjpg0AYrzp5jxKnlikFvIC_KMy",
  },
  {
    label: "Red Panda",
    link: "https://drive.google.com/uc?id=12tXgrtHYST-L0KmdissQM7psqdT0wv8W",
  },
  {
    label: "Rabbit",
    link: "https://drive.google.com/uc?id=1ESMu8OenZA4Rw8rpMBdM9vI9HFMM_869",
  },
  {
    label: "Parrot",
    link: "https://drive.google.com/uc?id=1VVmucK619yaKz6IzmpHTGZPHCZlObMSe",
  },
  {
    label: "Owl",
    link: "https://drive.google.com/uc?id=1fnyDZyDNzXPOBRVlTmnaPNfhpEMxeVJO"
  },
  {
    label: "Otters",
    link: "https://drive.google.com/uc?id=1QShpR_A3hjGvCb_fGcNc76FmDRF_VclK"
  },
  {
    label: "Llama",
    link: "https://drive.google.com/uc?id=14PlUSHI2BcIzX5xpCXGGrN55OKSw3fjS"
  },
  {
    label: "Ladybird",
    link: "https://drive.google.com/uc?id=11zwWIwNr3Q_ouKsvjhgU0XkywLTPlCQg"
  },
  {
    label: "Dog",
    link: "https://drive.google.com/uc?id=1oqTvxr6CRsVTlnITo_0URh-RIxQ03Er9"
  },
  {
    label: "Chameleon",
    link: "https://drive.google.com/uc?id=1wpuda02M-LQ2-MSE-YFALrpQP71XD3MA"
  },
  {
    label: "Butterfly",
    link: "https://drive.google.com/uc?id=13LIr3pOtNvoJ4pUggplDrv3FcUzRf9SF"
  }
]);

db.food.insertMany([
  {
    label: "Coffee",
    link: "https://drive.google.com/uc?id=1uXGzPE5QO3Yzc50S-hmVRVhgnBIec9Ew",
  },
  {
    label: "Tacos",
    link: "https://drive.google.com/uc?id=1T18bVmDOzX_DHizHo7LMENzoX9DMdMq5",
  },
  {
    label: "Stuffed Eggplant",
    link: "https://drive.google.com/uc?id=1zY-7DtLwMOK_zHkTOshjAD5rnS_orfCC",
  },
  {
    label: "Shish Kebab",
    link: "https://drive.google.com/uc?id=1tGKhCJpVGMxN4AKJQfhPJYKj-BKNC5kU",
  },
  {
    label: "Samosa",
    link: "https://drive.google.com/uc?id=1vv2qygWsuODlmVCyJszYLut8T5iGf3iY",
  },
  {
    label: "Salmon",
    link: "https://drive.google.com/uc?id=1GDkE2oHL2dOvxdAXs38Ld7IkOPh9zc6Q",
  },
  {
    label: "Red Velvet",
    link: "https://drive.google.com/uc?id=16CJpL3gcWDgaIpKKc7Ai_il5seRLdYUt",
  },
  {
    label: "Pizza",
    link: "https://drive.google.com/uc?id=1s5wnQ7Z8b3Et0QNJKLYLA5zDevmcyPkK",
  },
  {
    label: "Pasta",
    link: "https://drive.google.com/uc?id=1wNeJqYVWdxcMxePuqm0mGRUFpQNtq-kT",
  },
  {
    label: "Oats",
    link: "https://drive.google.com/uc?id=1BEJckbXbkLcZj7ummYW3QFUWMGn66pf2",
  },
  {
    label: "Menemen",
    link: "https://drive.google.com/uc?id=1k67sKIA6R2hVx7CueWoZk2mN5NXTVyU9",
  },
  {
    label: "Lasagne",
    link: "https://drive.google.com/uc?id=1zFENXMfLkBm8M5yPfbMagcibEvgMPLGH",
  },
  {
    label: "Laddoo",
    link: "https://drive.google.com/uc?id=1f2j8IMdjSdwz1qZEux37m1G8mEXyooNp",
  },
  {
    label: "Fruit Loaf",
    link: "https://drive.google.com/uc?id=1RrHcFrAbIUmK47fN1I_N6gcRTNHNpKRo",
  },
  {
    label: "Fries",
    link: "https://drive.google.com/uc?id=1b5Loq1iu9CGO7T5Ia_bz-O8rgEbFIWW6",
  },
  {
    label: "Chocolate Cake",
    link: "https://drive.google.com/uc?id=1rtBuMoQV5TEH8pGOaW_JDmo2QbcKQaFW",
  },
  {
    label: "Burger",
    link: "https://drive.google.com/uc?id=1OXHg1Icq0wofVO6xtNx1TRvPIPpQ2-Qa",
  },
  {
    label: "Avocado Toast",
    link: "https://drive.google.com/uc?id=1G394UBMwd1GV1c8mV-c41TyCaJLTv897",
  }
]);

db.locations.insertMany([
  {
    label: "Algrave",
    link: "https://drive.google.com/uc?id=10_wvoq-k4Sy8-JLLInMTe2FfTG5Ws0qC",
  },
  {
    label: "Colosseum",
    link: "https://drive.google.com/uc?id=1FnmaMGFhL8ExbZarteA9u-kHWpz_Hl7K",
  },
  {
    label: "Victoria Falls",
    link: "https://drive.google.com/uc?id=1mCLzA2AcmLeoZnb2kd44fZM_I5wfNIE7",
  },
  {
    label: "Taj Mahal",
    link: "https://drive.google.com/uc?id=1hXhbU73orJeBr_OIr0AgTyDWj8UZZbPN",
  },
  {
    label: "Stonehenge",
    link: "https://drive.google.com/uc?id=1CfSTgbkWHcV7-uYxL_3Lpbet7nMlvZda",
  },
  {
    label: "Statue of Liberty",
    link: "https://drive.google.com/uc?id=1_IkmROvhVShOY7snzeZwN5NSQmGxD0nL",
  },
  {
    label: "Sahara Desert",
    link: "https://drive.google.com/uc?id=1y6nC3attJnqu6TTKpK467UnospPaBxRz",
  },
  {
    label: "London Bridge",
    link: "https://drive.google.com/uc?id=14MigMlsIyVoY1i0pqF6n28SsqtdOQvSX",
  },
  {
    label: "Leaning tower of Pisa",
    link: "https://drive.google.com/uc?id=1xkdpQ3C8Ef_b9b0lAHFOKBr_4chS4DWA",
  },
  {
    label: "Kyoto",
    link: "https://drive.google.com/uc?id=1lracBT1DqIH-9U-dEbx0iadKcbPTVwbX",
  },
  {
    label: "Blue Lagoon",
    link: "https://drive.google.com/uc?id=1As6d0qNDJ-qc5c4BB4OXWnywjW3E2ctt",
  },
  {
    label: "Burj Khalifa",
    link: "https://drive.google.com/uc?id=1lT8t7_qVsXevvT7-EU3S7CRhukdHnUG7",
  },
  {
    label: "Eiffel Tower",
    link: "https://drive.google.com/uc?id=1R8USp-nsLZ541uwx23UO0SP8YWzxr-35",
  },
  {
    label: "Bora Bora",
    link: "https://drive.google.com/uc?id=1PxpauQ9JRrBD5qn0NXFMyjAHf6_YgEnM",
  },
  {
    label: "Grand Canal",
    link: "https://drive.google.com/uc?id=13GNPZlMwLcUjENqbNHDev8Wl6U5dA12U",
  },
  {
    label: "Death Valley",
    link: "https://drive.google.com/uc?id=1jf2yedqtcAUpwcUfLyV_t-1DSxO9DgBN",
  },
  {
    label: "Grand Canyon",
    link: "https://drive.google.com/uc?id=1QOU2T1QvR00g-lMs6VwAKwYa-CggjEwX",
  },
  {
    label: "Christ the Redeemer",
    link: "https://drive.google.com/uc?id=1DudBNnnWSU2NIPrI9D8LRGFHyZpqWD3h",
  }
])

db.celebs.insertMany([
  {
    label: "Boris Johnson",
    link: "https://drive.google.com/uc?id=1vsryELvJ9qDIaH5bx2YND0HlvGIqUuYf",
  },
  {
    label: "Donald Trump",
    link: "https://drive.google.com/uc?id=13e3DDTRDm6dw-jhslnyNzqyosL_6repR",
  },
  {
    label: "James Corden",
    link: "https://drive.google.com/uc?id=1Aax-qK2YNp7MMKKrTes3fULcy0EvP2Dm",
  },
  {
    label: "Jeremy Clarkson",
    link: "https://drive.google.com/uc?id=1bDCAtIZPk57GbWQauSOJMIMkilm-h-ZX",
  },
  {
    label: "Joffrey Baratheon",
    link: "https://drive.google.com/uc?id=16b7j7m7TNXVBWo6mcpQkkp6p-bNqA9uK",
  },
  {
    label: "Kanye West",
    link: "https://drive.google.com/uc?id=1RisxvdALCkWlpGo6HHr6W53f0YRx5sIB",
  },
  {
    label: "Kermit The Frog",
    link: "https://drive.google.com/uc?id=1f4R2s39Ry5so7hKwCkjNOnQjLPW7B6Kd",
  },
  {
    label: "Kim Kardashian",
    link: "https://drive.google.com/uc?id=1wQrWFFgSFTTf2knCUzhgrd4gGrrWZFSy",
  },
  {
    label: "Lewis Capaldi",
    link: "https://drive.google.com/uc?id=10XKKyxXNWKkboLQT0-aYAGVG2ITsXTMq",
  },
  {
    label: "Limmy",
    link: "https://drive.google.com/uc?id=189MggHG9pcqqF4ltpb442ot6ClNczLSQ",
  },
  {
    label: "Machine Gunn Kelly",
    link: "https://drive.google.com/uc?id=16c2shWTK8P1qj3Tqqgt7xjzSwiBaUxb_",
  },
  {
    label: "Megan Fox",
    link: "https://drive.google.com/uc?id=1lxOREeKQ4Sq7j3bBLLo4UwbWBuIefS32",
  },
  {
    label: "Miss Piggy",
    link: "https://drive.google.com/uc?id=1BFc1Jf7u1J66NIzzwReMumGcFbe2oSbm",
  },
  {
    label: "Molly Mae",
    link: "https://drive.google.com/uc?id=1xhL8qJ5vJFa_O0I2i1tLypuLBFWwIbuo",
  },
  {
    label: "Nicholas Cage",
    link: "https://drive.google.com/uc?id=1BRyuQZWXhgcOyvM4CPpwqcLjA3nzthnZ",
  },
  {
    label: "Nigel Farage",
    link: "https://drive.google.com/uc?id=1asyTFjKOK7CbuXCi8s6WvorzI3ObzF-D",
  },
  {
    label: "Pete Davidson",
    link: "https://drive.google.com/uc?id=1SFwBvmGb9yNgJN2IhMt1rWriQKEJ_VpL",
  },
  {
    label: "Piers Morgan",
    link: "https://drive.google.com/uc?id=1czj_a-NmnKnFXbi366zl8ZgyhhfefHGO",
  }

]);

