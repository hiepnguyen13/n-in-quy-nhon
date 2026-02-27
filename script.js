const PLACES = [
  {
    id: 1,
    name: "Tiểu chủng viện Làng Sông",
    type: "checkin",
    image:
      "https://statics.vinpearl.com/tieu-chung-vien-lang-song-01_1711553155.jpg",
    address: "Phước Thuận, Tuy Phước, Bình Định",
    map: "https://www.google.com/maps/place/Lang+Song+Minor+Seminary/@13.8205498,109.1965167,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6b24de11b9c5:0x4f2d1b78d9a3309a!8m2!3d13.8205498!4d109.1990916!16s%2Fg%2F11bwzyw01k?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    name: "Eo gió",
    type: "checkin",
    image: "https://quynhontrip.com/wp-content/uploads/2020/10/eo-gio.jpg",
    address: "Nhơn Lý, Quy Nhơn",
    map: "https://www.google.com/maps/place/Eo+Gi%C3%B3/@13.8861092,109.2822929,15z/data=!3m1!4b1!4m6!3m5!1s0x316f433ba6966b79:0xdbe61a32706ee9f9!8m2!3d13.8861097!4d109.2925926!16s%2Fg%2F11ghnyk3cp?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    name: "Bãi biển Kỳ Co",
    type: "checkin",
    image:
      "https://quynhonhotel.com/wp-content/uploads/2021/03/bai-tam-ky-co-quynhonhotel.jpg",
    address: "Nhơn Lý, Quy Nhơn",
    map: "https://www.google.com/maps/place/Ky+Co+Beach/@13.850139,109.2723259,15z/data=!3m1!4b1!4m6!3m5!1s0x316f69f3b44b2e29:0x75e9afabce0602c7!8m2!3d13.85014!4d109.2918099!16s%2Fg%2F11f15p_5jq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    name: "Làng chài Nhơn Lý",
    type: "checkin",
    image: "https://cdn3.ivivu.com/2024/06/du-lich-Quy-Nhon-ivivu.jpg",
    address: "Nhơn Lý, Quy Nhơn",
    map: "https://www.google.com/maps/place/L%C3%A0ng+ch%C3%A0i+Nh%C6%A1n+L%C3%BD/@13.8827314,109.2880293,17z/data=!3m1!4b1!4m6!3m5!1s0x31420e7faeb8ffdb:0xa24927820226b260!8m2!3d13.8827314!4d109.2906042!16s%2Fg%2F1pzrjpp0n?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 5,
    name: "Hòn Khô",
    type: "checkin",
    image: "https://cdn.xanhsm.com/2024/12/c229ac77-hon-kho-quy-nhon-10.jpg",
    address: "Nhơn Hải, Quy Nhơn",
    map: "https://www.google.com/maps/place/H%C3%B2n+Kh%C3%B4/@13.7692033,109.2860655,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6fe48d47ff09:0x50150c25bc5cf2e9!8m2!3d13.7692033!4d109.2909364!16s%2Fg%2F11kk14_66f?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 6,
    name: "Đồi cát Phương Mai",
    type: "checkin",
    image:
      "https://salatour.com/wp-content/uploads/2019/10/doi-cat-phuong-mai1-2.jpg",
    address: "Nhơn Hội, Quy Nhơn",
    map: "https://www.google.com/maps/place/%C4%90%E1%BB%93i+C%C3%A1t+Ph%C6%B0%C6%A1ng+Mai/@13.8478191,109.2649938,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6b1522ca572d:0x866560384ae5006f!8m2!3d13.8478191!4d109.2675687!16s%2Fg%2F11v0plwpbl?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 100,
    name: "Bánh xèo tôm nhảy rau mầm",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt6nFWODP7ZvRuzhcAk1TTzEtnbM2IwX-0uw4lKBOyplVnXVhGw4mPJnvhDwt9xW7y1xRuCIBEMsSYBECzNQ_00po_S1D5EPf0zhl1ZXxT2Y7B2BD4WZ6R5T5MnhOhhrMPtzEt-kg=w1200-h900-p",
    address: "91 Đống Đa",
    map: "https://www.google.com/maps/place/Qu%C3%A1n+B%C3%A1nh+X%C3%A8o+T%C3%B4m+Nh%E1%BA%A3y+Rau+M%E1%BA%A7m/@13.7839688,109.2206286,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6c9d48ef7035:0x2291f09ccaebe5ea!8m2!3d13.7839688!4d109.2232035!16s%2Fg%2F1jkvd0p8j?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.3,
    reviews: 492,
    bestSeller: "Bánh xèo tôm đất",
  },
  {
    id: 101,
    name: "Bún rạm - Bún tôm Mỹ Hạnh",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9ps2WSgL97SAfEzMSsiGxq2S6tGYuCc9rO1v4LHWahMIe6zCBBk9fW5fHCYbPG-wLaBrhIR4NvAefD_b_CVzCHOV71L7i4v6V9dyiTVVeZ8I2x1WJBO3PLi2Nac1U2R2neEPwun2Mw=w600-h900-p",
    address: "48 Ngô Gia Tự",
    map: "https://www.google.com/maps/place/B%C3%BAn+R%E1%BA%A1m+-+B%C3%BAn+T%C3%B4m+M%E1%BB%B9+H%E1%BA%A1nh+Quy+Nh%C6%A1n/@13.7559318,109.2106787,17z/data=!4m16!1m9!3m8!1s0x316f6d90ebec3cad:0xc853aab0afac788e!2zQsO6biBS4bqhbSAtIELDum4gVMO0bSBN4bu5IEjhuqFuaCBRdXkgTmjGoW4!8m2!3d13.7559318!4d109.2106787!9m1!1b1!16s%2Fg%2F11c7sybhcq!3m5!1s0x316f6d90ebec3cad:0xc853aab0afac788e!8m2!3d13.7559318!4d109.2106787!16s%2Fg%2F11c7sybhcq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.1,
    reviews: 1410,
    bestSeller: "Bún tôm, bún rạm",
  },
  {
    id: 102,
    name: "Thuỳ bún",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9pu7j6b1kSVrCPC05tDaUNaCV5VLDMcDKsH8c-1gqQWJvQG8Etpo_qHnv_JYz0g9iTSf489-Awk-zMFgM4fgj5DPxS14XLiO85boLAXcICL2Veb_804liCQFvxDHrXNDyPxDYFU=w600-h450-p",
    address: "261 Tăng Bạt Hổ",
    map: "https://www.google.com/maps/place/Bun+Thuy/@13.7721422,109.2253896,19z/data=!3m1!4b1!4m6!3m5!1s0x316f6c8fb9197ed9:0x221dcd0cd0d2b53!8m2!3d13.7721422!4d109.2253896!16s%2Fg%2F11j1hz5lsc?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.4,
    reviews: 850,
    bestSeller: "Bún rạm, bún sứa, bún cá",
  },
  {
    id: 103,
    name: "Bún tôm - Rạm Đầm Trúc",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9psIUYQlX-JCaaCH85ozEVPPPdMnc3i5s2CfOLwygdPdlBis5NfR8ywGDeq8MK2HqOLhU1hRZmP6fF3B6rHQIS9LIQY7IRziziuBnhhLsnJ0HwR4CrSFqIbyxJjSL0itq8sV06rS=w600-h450-p",
    address: "1A Trần An Tư",
    map: "https://www.google.com/maps/place/B%C3%BAn+T%C3%B4m+-+R%E1%BA%A1m+%C4%90%E1%BA%A7m+Tr%C3%BAc/@13.7666309,109.2172261,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d6e40e4fddb:0xbb7eccf32e4a64e3!8m2!3d13.7666309!4d109.219801!16s%2Fg%2F11fsz1q3n7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.6,
    reviews: 429,
    bestSeller: "Bún rạm, bún tôm",
  },
  {
    id: 104,
    name: "Gỏi cá Thanh Kiều",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt5YLE5sZIkb8Lq0NRHeXuHa5__ZAsHWTjXjoACWm_tS6phDSQiF64nEDRNrPwXzClIGmLE60gbqsx6-gIb_U835iMm9WjqG9JjNfeIFu3RSYgiPuc7zYAE30o8ccc-WagD_j6a=w600-h450-p",
    address: "69/1 Trần Hưng Đạo",
    map: "https://www.google.com/maps/place/G%E1%BB%8Fi+C%C3%A1+Thanh+Ki%E1%BB%81u/@13.7720012,109.2422463,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d385621fcfb:0x83319f4aa72cd7bc!8m2!3d13.7720012!4d109.2471172!16s%2Fg%2F11y1f8nz7r?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.5,
    reviews: 619,
    bestSeller: "Gỏi cá mai, bò nướng",
  },
  {
    id: 105,
    name: "Cơm nhà 1989",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9psFK24uMjB2VFfMgKv7O6qhVWisKkYdadhLCQDe-Rjuh6Rfpe9ha_QRMhVcDmHACRr6Nrsjkm6QfkaOAWgQ2XQ5-kz5th8LKh3XJsJLUbeT_7P0QlhbDnAQlycLylSz8zDBtZY2=w600-h450-p",
    address: "43 Mai Xuân Thưởng",
    map: "https://www.google.com/maps/place/C%C6%A0M+NH%C3%80+1989/@13.7755256,109.2251918,19.47z/data=!4m6!3m5!1s0x316f6c85135e4ddb:0xf72ebcebcf2c4660!8m2!3d13.7754146!4d109.2255593!16s%2Fg%2F11jl1_46br?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.1,
    reviews: 284,
    bestSeller: "Cơm nhà",
  },
  {
    id: 106,
    name: "Nhà của Mị",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9psBcTUcOdFJ2Fo8UbEwzUV6H8JVekUHR2qheo0M-k76uJ7ZVteeIwU8t1DulF93WXrUV-1DfItPzqv1r7n9DwMOIgBxt5obdv79tLMkfSTdU_HA8BAFrP1yDkVkwJjRbZQDr75RCRDEJkc=w1200-h900-p",
    address: "293 Bạch Đằng",
    map: "https://www.google.com/maps/place/Ti%E1%BB%87m+C%C6%A1m+L%E1%BA%ABu+Nh%C3%A0+C%E1%BB%A7a+M%E1%BB%8B/@13.7780667,109.2251396,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d98689d0a99:0x799dde960dc78efc!8m2!3d13.7780667!4d109.2300105!16s%2Fg%2F11s58mp0v_?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.1,
    reviews: 74,
    bestSeller: "Cơm, lẩu",
  },
  {
    id: 107,
    name: "Nem chợ huyện Ôlala",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9puOeRtg4KcyTQ5qDrWiiwz2q0Zv2w6MTUXZQnQp1ppSQ6S2YvOQDYVCs6HUHRxZkSXpMXe4bHqPTFBavht6xqPCx2fW1df7cgmBCuVeimFdKE3XazbYE-fhjCUuH-2xGzYsDdM=w1200-h900",
    address: "24 Xuân Diệu",
    map: "https://www.google.com/maps/place/Nem+Ch%E1%BB%A3+Huy%E1%BB%87n+%C3%94lala+Quy+Nh%C6%A1n/@13.7709566,109.2457294,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d9d444b5947:0x8f42ca8d8b64fc59!8m2!3d13.7709566!4d109.2483043!16s%2Fg%2F11tc3lk15f?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.3,
    reviews: 118,
    bestSeller: "Nem nướng, lụi nướng, bò lá lốt",
  },
  {
    id: 108,
    name: "Bánh bèo bà Xê",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptK7GBr8FdeSNccPtRzVfKuoviOpbdIxVLff4jR-D7vm567iEFo2rxCV5Z5tboSYMz6khgxubop1cYGhitTQjcX-2KPZ_ShK7h9_4OLlIPch8mkUV0Up2nNQKVZqrIa3occGJke=w600-h900-p",
    address: "62A Phan Thúc Trực",
    map: "https://www.google.com/maps/place/B%C3%A1nh+b%C3%A8o+B%C3%A0+X%C3%AA/@13.7936676,109.2072667,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d9a1ee591a3:0xa2628b53d25a60d!8m2!3d13.7936676!4d109.2098416!16s%2Fg%2F11g0lf9ckt?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.2,
    reviews: 402,
    bestSeller: "Bánh bèo, bánh đúc, bánh nậm",
  },
  {
    id: 109,
    name: "Bánh căn nước cá cô Dư",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9purk0DvqE-BVraM0Ndd8akQzIOEQfEn4X_eNFfP9yle3iPtRN--rYlXML0FOaOVIfRNJHrStoHO1Yf-lOD4313XSpmc26cob0gKc7yrevX1N5VM7YKXxonCf2cJk9T9u2O4wDOA=w1200-h900-p",
    address: "63/1 Nguyễn Huệ",
    map: "https://www.google.com/maps/place/B%C3%A1nh+c%C4%83n+n%C6%B0%E1%BB%9Bc+c%C3%A1+C%C3%B4+D%C6%B0/@13.7695476,109.2294184,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6de79dd865d9:0xeaa263e07c63c941!8m2!3d13.7695476!4d109.2319933!16s%2Fg%2F11sv__4m_x?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.7,
    reviews: 51,
    bestSeller: "Bánh căn nước cá ngừ",
  },
  {
    id: 110,
    name: "Xôi Lăng Ông",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9puw3miEWWbaGH0oIziHCIF1C9amIMg5YJ9OcaAUW5o0x7Nn6rBaFhEGL3tNDhvwo5Chfl3G0ahKY18iWsWt_aTaevrdCufGniRtZc806SlmS2RxyGglT8xnai86j_LQZTgh9LJMCTAc56VS=w600-h450-p",
    address: "73B Nguyễn Huệ",
    map: "https://www.google.com/maps/place/X%C3%B4i+L%C4%83ng+%C3%94ng+_TP/@13.7694975,109.2291207,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6c8913bdfd1f:0xaabe99cc42e8bc1b!8m2!3d13.7694975!4d109.2316956!16s%2Fg%2F11dfqwpfwf?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.1,
    reviews: 153,
    bestSeller: "Các loại xôi",
  },
  {
    id: 111,
    name: "Cháo lòng bánh hỏi 01",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9pu9_XLo4qybB5_jvjq4oeyF8dMJnNAQEoNPedFAZtYKl5RjCrO9TU-sgEY8yMFXffTes_slCzlUwIuAMghrnWDdr0QNyDnTmC7s8puwzVMeIo3dUthmi69qVrSLi5JsEuE9Shdb=w1200-h900-p",
    address: "94 Nguyễn Huệ",
    map: "https://www.google.com/maps/place/Ch%C3%A1o+l%C3%B2ng+b%C3%A1nh+h%E1%BB%8Fi+Quy+Nh%C6%A1n/@13.768664,109.2266251,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6de32ff2b23f:0x103825cb405dba0a!8m2!3d13.768664!4d109.2292!16s%2Fg%2F11khc68z9f?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.8,
    reviews: 161,
    bestSeller: "Cháo lòng, bánh hỏi",
  },
  {
    id: 112,
    name: "Bánh hỏi cháo lòng 20 Diên Hồng",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9pte-1Wly5JbcMW4mUuKl1aABpTZaKMddXxuk9QGp1mnfxNbXwygpEsR0h-1nNFr_2BPPZlwpXRMa9TGBh11fg3IpNTTSs751yHmjvCJ865G3B0SubaNhBSKt9fwwXGEqLDqZ0BUdWoZbAQ=w600-h900-p",
    address: "20 Diên Hồng",
    map: "https://www.google.com/maps/place/B%C3%A1nh+H%E1%BB%8Fi+and+Pork+Offal+Porridge%2F+20+Dien+Hong/@13.7736909,109.2210563,15z/data=!4m16!1m9!3m8!1s0x316f6d263a0f2863:0x1a681af41a08ff2c!2sB%C3%A1nh+H%E1%BB%8Fi+and+Pork+Offal+Porridge%2F+20+Dien+Hong!8m2!3d13.7736909!4d109.2210563!9m1!1b1!16s%2Fg%2F11f5q72rh2!3m5!1s0x316f6d263a0f2863:0x1a681af41a08ff2c!8m2!3d13.7736909!4d109.2210563!16s%2Fg%2F11f5q72rh2?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.1,
    reviews: 511,
    bestSeller: "Cháo lòng, bánh hỏi",
  },
  {
    id: 113,
    name: "Chè xổm",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9puqabk7JPcXOasCNXU40UOtVMv9SkT1kGx1Pp4zR-tM7I8hKXz15SD64mIStyUbO9NzAeIOz77bdCFFIfzqGZ2NjjajgqGDCfAaImCGtNC3acW_DZkysvjJ5i60rmPFIFRIsvv_ywBtX8C7=w600-h450-p",
    address: "195A Bạch Đằng",
    map: "https://www.google.com/maps/place/Ch%C3%A8+x%E1%BB%95m/@13.7765743,109.2288972,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d8df5189241:0x8d9c8fb77e13c033!8m2!3d13.7765743!4d109.2337681!16s%2Fg%2F11h_57h4mm?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.5,
    reviews: 115,
    bestSeller: "Các loại chè",
  },
  {
    id: 114,
    name: "Nước đậu sương sáo cô Năm",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvNqqpRutu_qqXWLKCCd9QniOySr-uLgwH8uRO4a4shyXN--56ji-_jfuiK4nbuhV-DOryNg-xMe4qa-2qV_EDSykmB8I4sp26dvJvWzhFWIF3CXXGSaWZRBa8bj8YQS6xF3JTb7YyiEGg=w600-h450-p",
    address: "160 Xuân Diệu",
    map: "https://www.google.com/maps/place/N%C6%B0%E1%BB%9Bc+%C4%91%E1%BA%ADu+s%C6%B0%C6%A1ng+s%C3%A1o+C%C3%94+N%C4%82M/@13.7687542,109.2289945,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d21cc6e4fc7:0x75b1ac325537fe2d!8m2!3d13.7687542!4d109.2315694!16s%2Fg%2F11g0gbgts0?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.5,
    reviews: 485,
    bestSeller: "Đậu xanh sương sáo",
  },
  {
    id: 115,
    name: "Jollibee Quy Nhơn",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptmyc5il5L_yURSxe65fLambHIpeCrgLcqx3xr1b1fg5P_ym50K2g-rn3aQiQFDJ5VogcTFcy6LVsVltXSJua1QREY03jagNGMiTw6RbC8wcNIvC8VYneRuT8Gon08QM6VKVsGYnA=w600-h450-p",
    address: "417 Nguyễn Huệ",
    map: "https://www.google.com/maps/place/Jollibee+Quy+Nh%C6%A1n/@13.7638664,109.2205699,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6c92a54dd61f:0xd6969b4e8ca2de6f!8m2!3d13.7638664!4d109.2231448!16s%2Fg%2F11c0w3mp3d?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.3,
    reviews: 747,
  },
  {
    id: 116,
    name: "Jollibee Quy Nhơn 2",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9puPaeN0-1z55LjJ85i06hpZNjlfa-luJmdRVy_iiC_-pKKcJh-4HaSaZBb9B4gDY0WewapuXmo0CRpbCLjZXUX0yj1Y0cYMptCrwUgnm8dobvSKkU30yk8W5DlE2u6f5XyCEQyx=w600-h900-p",
    address: "496 Trần Hưng Đạo",
    map: "https://www.google.com/maps/place/Jollibee+Quy+Nh%C6%A1n+2/@13.7802846,109.2207436,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d918bac4589:0xd8858aee7429e86b!8m2!3d13.7802846!4d109.2233185!16s%2Fg%2F11y3zsq0sg?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.8,
    reviews: 599,
  },
  {
    id: 117,
    name: "Jollibee GO Quy Nhơn",
    type: "food",
    image:
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9punnn11uMn96DtEV3-Wva3nCEVCUUqQuKn-1HAhHHyq_NSBov6nHNg-P_X2MMQIcxsZ0rsNXb0aQhYP_Rwuxia00BBJymBURATUM1qUPfMMhRsVdBSrhOIjm2di52Bezm-ghj0VCi41iQw=w600-h450-p",
    address: "Quy Nhơn Plaza",
    map: "https://www.google.com/maps/place/Jollibee+GO+Quy+Nhon/@13.7546274,109.2049435,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6cc33fcecbad:0xbcf259e80aa4ca87!8m2!3d13.7546274!4d109.2075184!16s%2Fg%2F11c0w51q0h?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D",
    rating: 4.4,
    reviews: 395,
  },
  {
    id: 200,
    name: "Nhà thờ Chính Toà",
    type: "mass",
    image:
      "https://mia.vn/media/uploads/blog-du-lich/nha-tho-chinh-toa-quy-nhon-1-1755363252.jpg",
    address: "120 Trần Hưng Đạo",
    map: "https://www.google.com/maps/place/Quy+Nhon+Cathedral/@13.7755145,109.2324193,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6c8784e3e73f:0x32fb83ade37d8f06!8m2!3d13.7755145!4d109.2349942!16s%2Fg%2F1pznmkf02?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "5:00 | 17:30",
      saturday: "17:30",
      sunday: "5:00 | 7:00 | 8:30 | 17:30",
    },
  },
  {
    id: 201,
    name: "Nhà thờ Qui Đức",
    type: "mass",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQ7j44RB9gL7JK91yHLq_AQCz6NrnQuXW_Q&s",
    address: "946 Trần Hưng Đạo",
    map: "https://www.google.com/maps/place/Qui+Duc+Church/@13.7861572,109.2064409,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6ca07e6cfce1:0x430b888180079e5e!8m2!3d13.7861572!4d109.2090158!16s%2Fg%2F1pp2v2j30?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "5:00 | 17:30",
      saturday: "19:00",
      sunday: "5:00 | 8:00 | 16:30",
    },
  },
  {
    id: 202,
    name: "Nhà thờ Qui Hiệp",
    type: "mass",
    image:
      "https://salatour.com/wp-content/uploads/2021/12/nha-tho-quy-hiep.jpg",
    address: "142 Ngô Mây",
    map: "https://www.google.com/maps/place/Quy+Hiep+Church/@13.7642363,109.2130314,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6c94ce05198f:0x911b9cc9dc236a5a!8m2!3d13.7642363!4d109.2156063!16s%2Fg%2F1hc4ksh2d?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "18:00",
      saturday: "5:30 | 18:00",
      sunday: "5:30 | 16:30",
    },
  },
  {
    id: 203,
    name: "Nhà thờ Hoà Ninh",
    type: "mass",
    image: "https://top10quynhon.com/wp-content/uploads/nha-tho-hoa-ninh2.jpg",
    address: "128 Nguyễn Huệ",
    map: "https://www.google.com/maps/place/Hoa+Ninh+Church/@13.7651385,109.2210903,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6c8d6396925f:0x399f8233233144d5!8m2!3d13.7651385!4d109.2236652!16s%2Fg%2F1pp2v25t7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "17:30",
      saturday: "17:30",
      sunday: "17:30",
    },
  },
  {
    id: 204,
    name: "Trung tâm Thánh Thể & Thánh Mẫu",
    type: "mass",
    image:
      "https://cdn.xanhsm.com/2024/12/dc9cb6dd-nha-tho-da-ghenh-rang-3.jpg",
    address: "Đối diện mộ Hàn Mặc Tử",
    map: "https://www.google.com/maps/place/Ghenh+Rang+Mountain+Church/@13.7451953,109.2087043,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6ce0edf231bd:0x5336eaf6fb44bccd!8m2!3d13.7451953!4d109.2135752!16s%2Fg%2F11btv67hp0?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "19:00",
      saturday: "19:00",
      sunday: "19:00",
    },
  },
  {
    id: 205,
    name: "Nhà thờ Ghềnh Ráng",
    type: "mass",
    image:
      "https://www.cgvdt.vn/public/files/ckfinder/images/2018/CGVN/2150/hinh%201(1).jpg",
    address: "21 Tây Sơn",
    map: "https://www.google.com/maps/place/Ghenh+Rang+Church/@13.7469184,109.2120439,18z/data=!4m6!3m5!1s0x316f6ce737d61de3:0x16405842c618519f!8m2!3d13.7474593!4d109.2132736!16s%2Fg%2F1hc5yq3hv?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "18:00",
      saturday: "18:00",
      sunday: "5:15 | 17:00",
    },
  },
  {
    id: 206,
    name: "Nhà thờ Qui Hoà",
    type: "mass",
    image:
      "https://4.bp.blogspot.com/-nulYOF3fm3U/VW15zDUL0uI/AAAAAAAAujE/6YYA9rDnGHU/s1600/Quy%2BHoa%2B03.jpg",
    address: "Bệnh viện phong, Qui Hoà",
    map: "https://www.google.com/maps/place/Quy+Hoa+Church/@13.7222327,109.214806,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d146252b045:0x4f482a5a05582883!8m2!3d13.7222327!4d109.2167643!16s%2Fg%2F11b7c4nnp6?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "18:30",
      saturday: "18:30",
      sunday: "5:30 | 9:00",
    },
  },
  {
    id: 207,
    name: "Nhà thờ Xuân Quang",
    type: "mass",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhey74YIZQCto2Y31Uz3vLn88OYpyTEAarbw&s",
    address: "454 Tây Sơn",
    map: "https://www.google.com/maps/place/Xuan+Quang+Church/@13.7631401,109.1986517,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6cc7c42c2ed5:0xfe34fb42e3a71214!8m2!3d13.7631401!4d109.2012266!16s%2Fg%2F1jkvvd066?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "17:30",
      saturday: "17:30",
      sunday: "5:30 | 18:30",
    },
  },
  {
    id: 208,
    name: "Nhà thờ Hội Lộc",
    type: "mass",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipP1tDHRtjH8IPjeXXF5bD_UOWl2tqoe0CslpzLC=s680-w680-h510",
    address: "Thôn Nhơn Phước, Nhơn Hội",
    map: "https://www.google.com/maps/place/Nh%C3%A0+Th%E1%BB%9D+H%E1%BB%99i+L%E1%BB%99c/@13.8860625,109.247222,17z/data=!3m1!4b1!4m6!3m5!1s0x316f41383c122d55:0xf2bf3a8c9b51ac69!8m2!3d13.8860625!4d109.2497969!16s%2Fg%2F11j23pstcq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "18:00",
      saturday: "18:00",
      sunday: "7:00",
    },
  },
  {
    id: 209,
    name: "Nhà thờ Ngọc Thạnh",
    type: "mass",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdIKuMkbGncDl5sa0-gzQRq1nxQVp291qZA&s",
    address: "Phường Trần Quang Diệu",
    map: "https://www.google.com/maps/place/Nh%C3%A0+th%E1%BB%9D+gi%C3%A1o+x%E1%BB%A9+Ng%E1%BB%8Dc+Th%E1%BA%A1nh./@13.7979964,109.146878,17z/data=!3m1!4b1!4m6!3m5!1s0x316f14848a6a7fdd:0x2c4444731d912c91!8m2!3d13.7979964!4d109.1494529!16s%2Fg%2F1hm29kwdp?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "17:45",
      saturday: "17:45",
      sunday: "5:45 | 9:00 | 17:45",
    },
  },
  {
    id: 210,
    name: "Nhà thờ Đồng Tiến",
    type: "mass",
    image:
      "https://quynhonreview.vn/wp-content/uploads/2023/10/1698133712-5-nha-tho-tai-quy-nhon.jpg",
    address: "27 Nguyễn Thị Minh Khai",
    map: "https://www.google.com/maps/place/Dong+Tien+Church/@13.7705637,109.2167106,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6c9115f5f82d:0xd6cc1ad6871205c6!8m2!3d13.7705637!4d109.2192855!16s%2Fg%2F12mjyhsd8?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    time: {
      weekdays: "17:30",
      saturday: "17:30",
      sunday: "5:00 | 17:30",
    },
  },
];

const typeMap = {
  mass: "Giờ lễ",
  food: "Ăn uống",
  checkin: "Tham quan",
};

const VISITED_STORAGE_KEY = "quyNhonVisitedPlaceIds";

const placeGrid = document.getElementById("placeGrid");
const resultsInfo = document.getElementById("resultsInfo");
const tabs = [...document.querySelectorAll(".tab")];

console.log({ placeGrid });

const state = {
  filter: "mass",
  keyword: "",
};

const visitedIds = loadVisitedIds();

function loadVisitedIds() {
  try {
    const raw = localStorage.getItem(VISITED_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) {
      return new Set();
    }
    return new Set(parsed.filter((id) => Number.isInteger(id)));
  } catch {
    return new Set();
  }
}

function persistVisitedIds() {
  localStorage.setItem(VISITED_STORAGE_KEY, JSON.stringify([...visitedIds]));
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "");
}

function getFilteredPlaces() {
  const keyword = normalizeText(state.keyword.trim());

  return PLACES.filter((place) => {
    const byType = place.type === state.filter;
    const byKeyword =
      !keyword ||
      normalizeText(`${place.name} ${place.address} ${place.map}`).includes(
        keyword,
      );
    return byType && byKeyword;
  });
}

function cardTemplate(place) {
  const isVisited = visitedIds.has(place.id);
  const imageSrc = place.image || "https://picsum.photos/seed/quynhon/320/200";
  const visitedTypeClass = isVisited ? `card--visited-type-${place.type}` : "";
  let stars = "";
  if (place.rating) {
    const reviews = place.reviews
      ? ` <span style="color:#888;font-size:0.97em">(${place.reviews})</span>`
      : "";
    stars = `<span style="color:#E2C16B;font-size:1.1em">★</span> <span style="color:#333;font-size:1em">${place.rating}${reviews}</span>`;
  }
  return `
    <article class="card ${isVisited ? "card--visited" : ""} ${visitedTypeClass}">
      <img class="card__thumb" src="${imageSrc}" alt="${place.name}" loading="lazy" />
      <div class="card__body">
        <div class="card__head">
          <h3>${place.name}</h3>
        </div>
        ${place.type === "food" && place.bestSeller ? `<p>${place.bestSeller}</p>` : ""}
        <p style="display:flex;align-items:center;gap:6px">
          <a href="${place.map}" target="_blank" rel="noopener" style="color:#0073a8;text-decoration:underline">${place.address}</a>
        </p>
        <p>${stars}</p>
        ${
          place.type === "mass"
            ? `<div>
          <p style="font-style:italic">Giờ lễ:</p>
          <ul style="margin: 0">
            <li>Thứ Hai - Thứ Sáu: ${place.time.weekdays}</li>
            <li>Thứ Bảy: ${place.time.saturday}</li>
            <li>Chúa Nhật: ${place.time.sunday}</li>
          </ul>
          
          </div>`
            : ""
        }

        <div class="card__foot">
          ${
            place.type !== "mass"
              ? `
            <button
              class="visit-btn visit-btn--${place.type} ${isVisited ? "is-visited" : ""}"
              data-place-id="${place.id}"
              type="button"
            >
              ${isVisited ? "Đã đi ✓" : "Đánh dấu đã đi"}
            </button>
          `
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function render() {
  const filtered = getFilteredPlaces();

  // Show 'hello' above placeGrid if filter is mass
  const helloLine =
    state.filter === "mass"
      ? '<div style="margin-bottom:10px;font-style:italic;">Nguồn: <a id="source" href="https://gpquinhon.net/page/Gio-thanh-le-trong-tuan.html" target="_blank" rel="noopener" >gpquinhon.net</a></div>'
      : "";

  if (!filtered.length) {
    placeGrid.innerHTML =
      helloLine +
      `
      <article class="card card--empty">
        <h3>Không tìm thấy địa điểm phù hợp</h3>
        <p>Thử đổi từ khóa hoặc chọn tab khác.</p>
      </article>
    `;
    return;
  }

  placeGrid.innerHTML = helloLine + filtered.map(cardTemplate).join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    state.filter = tab.dataset.filter;
    render();
  });
});

placeGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".visit-btn");
  if (!button) {
    return;
  }

  const placeId = Number(button.dataset.placeId);
  if (!Number.isInteger(placeId)) {
    return;
  }

  if (visitedIds.has(placeId)) {
    visitedIds.delete(placeId);
  } else {
    visitedIds.add(placeId);
  }

  persistVisitedIds();
  render();
});

render();
