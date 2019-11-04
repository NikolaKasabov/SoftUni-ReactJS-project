const products = [
  {
    description: 'Телевизор LED Smart Samsung, 40" (100 см), 40NU7182, 4K Ultra HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/21907/21906457/images/res_66aea7682d9e497283e75e135d0a095e_full.jpeg',
    price: 649.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Smart Samsung, Извит, 49" (123 см), 49RU7302, 4K Ultra HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/20709/20708868/images/res_704172a171d2ced2f3d7d53be29876ba_full.jpeg',
    price: 999.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Samsung, 32" (80 см), 32N4003, HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/14427/14426264/images/res_f81ac8309fae026983bdbdde958651d1_full.jpg',
    price: 349.99,
    category: 'tv',
  },
  {
    description: 'Телевизор Smart Android LED Sony BRAVIA, 49" (123.2 см), 49XG8096, 4K Ultra HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/21350/21349552/images/res_ab8bd9fd651f7f5d74039028b92b2756_full.jpeg',
    price: 1299.99,
    category: 'tv',
  },
  {
    description: 'Телевизор Smart Android LED Sony BRAVIA, 55" (138.8 cм), 55XF9005, 4K Ultra HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/14100/14099502/images/res_6190079cc3354104f43e69e2929f9a08_full.jpg',
    price: 1999.99,
    category: 'tv',
  },
  {
    description: 'Телевизор Smart LED Sony Bravia, 32" (80 см), 32WD757, Full HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/3161/3160065/images/res_121aa00d8b1a07645a753a370d573c7c_full.jpg',
    price: 729.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Philips, 32" (80 см), 32PHS4503/12, HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/19415/19414798/images/res_b470fd220d205a635e6b52bd0f541bb0_full.jpg',
    price: 299.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Philips, 43" (108 см), 43PFT5503/12, Full HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/15938/15937550/images/res_b0a409c66777219272d17614e6f8e9bd_full.jpg',
    price: 469.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Smart Android Philips, 43" (108 см), 43PUS7304/12, 4K Ultra HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/22808/22807887/images/res_8ab6afc37d3f4995692d97b64d5f115d_full.jpg',
    price: 899.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Smart Panasonic, 32" (80 см), TX-32FS500E, HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/15531/15530894/images/res_68e5cb2b1100c44150f1a755ae3c380e_full.jpg',
    price: 499.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Smart Panasonic, 58" (146 см), TX-58GX810E, 4K Ultra HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/22718/22717523/images/res_282e7728adc5a3607ccef75f6e94ae4e_full.jpg',
    price: 1399.99,
    category: 'tv',
  },
  {
    description: 'Телевизор LED Smart Panasonic, 40" (100 см), TX-40GX700E, 4K Ultra HD',
    imageUrl: 'https://s12emagst.akamaized.net/products/22718/22717531/images/res_b4ae4afd69210867fdd2c3bc16e57fc7_full.jpg',
    price: 899.99,
    category: 'tv',
  },
  {
    description: 'Лаптоп Dell Vostro 3580 с Intel Core i5-8265U (1.60/3.90GHz, 6 M), 8 GB, 256GB M.2 NVMe SSD, AMD Radeon 520 - 2 GB GDDR5, Ubuntu, черен',
    imageUrl: 'https://s12emagst.akamaized.net/products/20295/20294919/images/res_77880b419ce41927026ecca231602378_full.jpg',
    price: 999,
    category: 'laptop',
  },
  {
    description: 'Лаптоп DELL Inspiron 3584, 15.6", Intel® Core™ i3-7020U, RAM 4GB, HDD 1TB, Intel® HD Graphics 620, Ubuntu, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/24907/24906348/images/res_30656dc4fd17ee84abec06d7316bf3e0_full.jpg',
    price: 699.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп DELL Inspiron 3584, 15.6", Intel® Core™ i3-7020U, RAM 4GB, HDD 1TB, AMD Radeon™ 520 2GB, Ubuntu, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/24553/24552984/images/res_2892728b774b6539d9b2fd6b42f1ecc7_full.jpg',
    price: 789.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп LENOVO V130-15IKB, 15.6", Intel® Celeron® 3867U, RAM 4GB, HDD 1TB, Intel® HD Graphics 610, Free DOS, Iron Grey',
    imageUrl: 'https://s12emagst.akamaized.net/products/16552/16551581/images/res_41e6444bdd39fdb133f95186f4819e5f_full.jpg',
    price: 479.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп Lenovo ThinkPad E590, Intel® Core™ i5-8265U up to 3.90 GHz, 15.6", 8GB, 256GB SSD, Intel® UHD Graphics 620, Free DOS, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/20403/20402960/images/res_c6295ed978b281f154b6abaa5e128487_full.jpg',
    price: 1259.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп Lenovo Ideapad L340-15IWL, Intel® Pentium Gold 5405U 2.30 GHz, 15.6", Full HD Anti-glare, 4GB, 128GB SSD M.2, Intel UHD Graphics 610',
    imageUrl: 'https://s12emagst.akamaized.net/products/24343/24342333/images/res_1b5d60ab4e98c8eca808b5ab9a2bd45c_full.jpg',
    price: 559.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп Acer Aspire 3, Intel Celeron N4100 Quad-Core (up to 2.40GHz, 4MB), 14" HD Anti-Glare, 4GB RAM DDR4, 128GB SSD, Intel UHD Graphics 600',
    imageUrl: 'https://s12emagst.akamaized.net/products/15081/15080047/images/res_bb3c2cba70c7c9b8736a1d69cb784ec2_full.jpg',
    price: 499.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп Acer Aspire 5, Intel® Core™ i5-8265U до 3.90 GHz, 15.6", Full HD, 8GB, 1TB HDD, NVIDIA® GeForce® MX250 2GB, Endless OS, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/24553/24552572/images/res_86f27a5a746da273ea80d3791d24bcea_full.jpg',
    price: 1193.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп Acer Nitro 5 AN515-43-R5TY с AMD Ryzen 7 3750H (2.3/4.0 GHz, 4 M), 8 GB, 1TB SATA 5400rpm, AMD RX 560X 4 GB GDDR5',
    imageUrl: 'https://s12emagst.akamaized.net/products/24463/24462680/images/res_247f044a366efb042343beb36153f852_full.jpg',
    price: 1399,
    category: 'laptop',
  },
  {
    description: 'Лаптоп HP 250 G7 with processor Intel Core i3-7020U 2.3 GHz, 15.6", Full HD, 4GB, 500GB HDD, Intel HD Graphics 620',
    imageUrl: 'https://s12emagst.akamaized.net/products/25521/25520071/images/res_ab818233acc6d63859a7ba8240b72b43_full.jpg',
    price: 595.99,
    category: 'laptop',
  },
  {
    description: 'Лаптоп Gaming OMEN by HP 15-dc0019nq,Intel® Core™ i7-8750H up to 4.00 GHz, 15.6", Full HD, 8GB, 1TB, NVIDIA GeForce GTX 1050 Ti 4GB',
    imageUrl: 'https://s12emagst.akamaized.net/products/16498/16497606/images/res_6bd229e9d8d549819ec0a164f5a9b204_full.jpg',
    price: 1799.99,
    category: 'laptop',
  },
  {
    description: 'Ultrabook HP ENVY 13-ah1005nn, Intel® Core™ i5-8265U up to 3.90 GHz, Whiskey Lake, 13.3", Full HD, IPS, 8GB, 256GB SSD, Intel® UHD Graphics 620',
    imageUrl: 'https://s12emagst.akamaized.net/products/17054/17053955/images/res_cd4dd2aab82c4939fad0e5ca6146c288_full.jpg',
    price: 1699.99,
    category: 'laptop',
  },
  {
    description: 'Смартфон Samsung Galaxy S10e, Dual SIM, 128GB, 6GB RAM, 4G, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/20114/20113799/images/res_c64779826626e5a1382fe0cfe9158ab1_full.jpg',
    price: 1048.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Samsung Galaxy A50, Dual SIM, 128GB, 4G, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/20526/20525430/images/res_fc511f4dd86ac806e3500d0874766060_full.jpg',
    price: 534.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Samsung Galaxy A10, Dual Sim, 32GB, 4G, Blue, Включена карта 32 GB',
    imageUrl: 'https://s12emagst.akamaized.net/products/22495/22494113/images/res_a9cff507e04faf55770ce9c5cbf9ac6e_full.jpg',
    price: 248.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Apple iPhone 11, 64 GB, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/25344/25343941/images/res_99d57ec9e3d9bb8d3242f384288ce0a3_full.jpg',
    price: 1559,
    category: 'phone',
  },
  {
    description: 'Смартфон Apple iPhone 8 Plus, 64GB, 4G, Space Grey',
    imageUrl: 'https://s12emagst.akamaized.net/products/8892/8891498/images/res_2c73cc2716f9f52cc20570f91eafd76a_full.jpg',
    price: 1318.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Apple iPhone 7, 32GB, Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/4159/4158442/images/res_3b3636ac90d7a9afe016593aeb018473_full.jpg',
    price: 859.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Huawei P20 Lite, Dual SIM, 64GB, 4G, Midnight Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/14233/14232994/images/res_edb73b6e77be1aca39e2878dd2156ef2_full.jpg',
    price: 398.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Huawei P30 Lite, Dual SIM, 128GB, 4G, Midnight Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/21151/21150824/images/res_f3d7b7e05b935313a290a9cd922868b0_full.jpg',
    price: 588.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Huawei P30 Pro, Dual SIM, 128GB, 6GB RAM, 4G, Breathing Crystal',
    imageUrl: 'https://s12emagst.akamaized.net/products/20936/20935293/images/res_d00ea070b45400c402a8c5fd1b33c240_full.jpg',
    price: 1548.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Xiaomi Redmi S2, Dual SIM, 32GB, 4G, Grey',
    imageUrl: 'https://s12emagst.akamaized.net/products/15323/15322816/images/res_923558f22c8abd3fb1916ef72c5b4fac_full.jpg',
    price: 249.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Xiaomi Redmi Note 7, Dual SIM, 64GB, 4G, Blue',
    imageUrl: 'https://s12emagst.akamaized.net/products/22417/22416059/images/res_698c1413d9da4a190669b197539b263e_full.jpg',
    price: 368.99,
    category: 'phone',
  },
  {
    description: 'Смартфон Xiaomi Mi 9T Pro, Dual SIM, 64GB, 6GB RAM, 4G, Carbon Black',
    imageUrl: 'https://s12emagst.akamaized.net/products/25038/25037895/images/res_71ad4a4701efc36776974a9469daf04a_full.jpg',
    price: 839.99,
    category: 'phone',
  },
]