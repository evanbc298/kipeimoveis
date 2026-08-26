export type Property = {
  slug: string;
  badge: string;
  title: string;
  bairro: string;
  bairroSlug: string;
  price: string;
  specs?: string;
  tipo: "Apartamento" | "Cobertura" | "Casa" | "Studio";
  description: string;
  images: string[];
};

export const PROPERTIES: Property[] = [
  {
    "slug": "one-tower-fg",
    "badge": "Pronto para morar",
    "title": "One Tower Fg",
    "bairro": "Barra Sul",
    "bairroSlug": "barra-sul",
    "price": "Consulte disponibilidade",
    "tipo": "Apartamento",
    "description": "One Tower Fg no Barra Sul, Balneário Camboriú. Pronto para morar, com espaço estar, área de descanso, cinema.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/1628351933329_a8a7ad6a-e013-4624-8eb4-8bc535596f73.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351912885_111ccf4d-f86d-4366-9eeb-ff0fd8d6b7b0.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351987028_cef11101-a581-4ff7-8613-c5753a1ab073.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351977205_01f8b265-2741-4832-93fb-79ece0b94869.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351966706_a788a612-494a-423a-9082-4589ce5512f0.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351944295_543f3a20-774f-43a3-9332-65bc9bf2b8ba.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351938082_1126e5bb-bceb-41fe-9a0a-3bd7c2e2d38a.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351921177_3615b640-b783-4f21-b4a9-2fc9f9adf66e.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351963057_9c0efb24-9603-4bd5-b0be-4327444a2ce4.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351948467_9a7e59c8-77b4-4ab3-b1d3-9e0c3e2be7d0.jpg",
      "https://dwvimagesv1.b-cdn.net/1628351972735_15ddc68e-46f3-41b1-ac48-2ac7cdcb9492.jpg",
      "https://dwvimagesv1.b-cdn.net/1628352013953_f9a7ec7a-821a-4ef1-87ff-329b5e7b4c7f.jpg"
    ]
  },
  {
    "slug": "north-tower-fg",
    "badge": "Em construção",
    "title": "North Tower Fg",
    "bairro": "Pioneiros",
    "bairroSlug": "pioneiros",
    "price": "A partir de R$ 3.800.000",
    "tipo": "Apartamento",
    "description": "North Tower Fg no Pioneiros, Balneário Camboriú. Em construção, com espaço beauty, salas de massagem, churrasqueira a carvão.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/c07e86e79b91dc394bbc12951677dbd8eea5af4fe8e9d545534b710197df5745.jpg-name-952ac9430e46c4b337f31ee5e79d55bfc79bb50fbc6fcca9183dec09764a8a98.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/DIFERENCIADO_02.jpg-name-c6c484be4de5ff37a67c25f7defc4c26db95b991a2a3ed2399b26bc20119bd35.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/DIFERENCIADO_03_IA.jpg-name-8b05932695081816c3eebce2c51404db793812997938efecfbd814b2830aea27.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/DIFERENCIADO_03.jpg-name-6c9bc50b6ec00714d7128ba780ea8d1038843d58b7a28cabf382cb0a985d1ad7.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/DIFERENCIADO_01.jpg-name-712ce7205da75f0b6c5b000ac08e3e01322210026e51aba75392dd9f4465b068.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/MASTER_05_IA.jpg-name-ad3c0a47dc1aad7a457c006243859ce8d115973bbbd66d053bf34d4e628077c5.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/MASTER_01.jpg-name-74082ec9ff437b03908556de343984a4cf22b8014380135af56f68f86f05d1ca.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/MASTER_02.jpg-name-f15941b15586bcab984cb03152983cf154fde93584742e7f8210dc4f6ce20e49.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/MASTER_03.jpg-name-b940ae4462d73d6c7390292b1c7ae6dc650a9d04488e672db00ad68bed0455b8.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/MASTER_04.jpg-name-27376161a0c91c372dc31090c0b0ecfff600fb6f9e2a6c96a6f0359c5614468b.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/APTO_TIPO_01.jpg-name-bf76fe38e1c894c0f2852f6cd7778818e78a85e2ebfc0282134848f68a90d653.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/40db7e9f-8ed0-4826-b78d-c68095295e38/galleries/pictures/APTO_TIPO_02.jpg-name-ff45c72bcf6029c14a83d43a4f34f3391e70b0ce968b094354adb201fcf00ab0.jpg"
    ]
  },
  {
    "slug": "artefacto-tower-ck",
    "badge": "Em construção",
    "title": "Artefacto Tower Ck",
    "bairro": "Praia Brava",
    "bairroSlug": "praia-brava",
    "price": "A partir de R$ 3.527.323",
    "tipo": "Apartamento",
    "description": "Artefacto Tower Ck no Praia Brava, Balneário Camboriú. Em construção, com  acabamento de alto padrão, 02 torres - a e b, 35 pavimentos.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/5d957cd2-a117-421e-86fd-20dc7a2fcca4/galleries/pictures/xCK_Artefacto_Fachada_Close_01_RF.jpg-name-a9859c99ef877b1e363357de7d481ec17a87808c68c733868ab90f3b269ecc20.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/5d957cd2-a117-421e-86fd-20dc7a2fcca4/galleries/pictures/CK_ArtefactoSuite_Tipo_Cam_01_p03.jpg-name-852745f447ea00342d15e33584034b4a078d5ed4b701c67479492265afdb2869.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/5d957cd2-a117-421e-86fd-20dc7a2fcca4/galleries/pictures/xCK_Artefacto_Piscina_Sacada_Norte_RF.jpg-name-e395f8cb9ee94019d4c3fbf7f7be23df39ce9d29552cd76911288c9b503350cf.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/5d957cd2-a117-421e-86fd-20dc7a2fcca4/galleries/pictures/xCK_Artefacto_Piscina_Cobertura_RF.jpg-name-02188cd5dc5cc09290999543dcde9e28ac46bc771e922372ce86900c2863a488.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/5d957cd2-a117-421e-86fd-20dc7a2fcca4/galleries/pictures/CK_Artefacto_Piscina_Cobertura_Sul_RF.jpg-name-cb8993ffe7509e6ddb8ee412dc0545fe195ef94cec0217e43f0a32fb06b6525c.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/5d957cd2-a117-421e-86fd-20dc7a2fcca4/galleries/pictures/CK_Artefacto_Fachada_Fotomontagem_02_p00.jpg-name-2bc676b13f2e9c0558e2c0d36c2bfbbf875c55ac392da0cd54080a518faa7258.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/5d957cd2-a117-421e-86fd-20dc7a2fcca4/galleries/pictures/CK_Artefacto_Fachada_Noite_01_RF.jpg-name-9898936318abe59f0e5329b50f405108b65ee569d585505689561ec9d9c3a01a.jpg"
    ]
  },
  {
    "slug": "meridian-tower",
    "badge": "Em construção",
    "title": "Meridian Tower",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 4.001.523",
    "tipo": "Apartamento",
    "description": "Meridian Tower no Centro, Balneário Camboriú. Em construção, com fachada ventilada nos dormitórios, esquadrias com vidro semi-refletivos, infraestrutura para carros elétricos.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/1668191381000_ab31ea1f-82f7-4af9-8baf-7d1b32405cce.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191377269_5f542e19-addb-4f97-8e13-b496d6ea454f.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191404431_032186a3-5e8f-4ab3-bcb1-9b1edd82d68c.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191412469_455e0665-d05e-4736-9f23-ec20ad023550.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191393919_37b10e27-04ad-4ee3-9de9-40a66f18e5e4.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191394388_2fce9c36-add3-4259-9e04-387664a994d7.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191519365_6e7a58f8-59ea-4678-b120-b3df07a53670.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191524089_fc8cd8ec-08b3-467c-9cd1-3945b783a66f.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191730700_11073c6e-c2ea-4ec1-b930-0f92991a7678.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191492754_96df6c50-8292-4047-8bd8-01f159a97b72.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191499719_316a940f-a9c3-43f8-8538-bd6a6fa87d77.jpg",
      "https://dwvimagesv1.b-cdn.net/1668191526112_086e995b-bf77-44fb-b659-6a09941a2735.jpg"
    ]
  },
  {
    "slug": "leblanc-brava-residence-rv",
    "badge": "Pronto para morar",
    "title": "Leblanc Brava Residence RV",
    "bairro": "Praia Brava",
    "bairroSlug": "praia-brava",
    "price": "A partir de R$ 6.132.186",
    "tipo": "Apartamento",
    "description": "Leblanc Brava Residence RV no Praia Brava, Balneário Camboriú. Pronto para morar, com port cochere, gerador de energia nas áreas comuns, fachada ventilada.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(129).JPG-name-3cdaa45e28d8e03b30345bf75bdfeac2b3f84699528ca0cbae31461969f7416a.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(133).JPG-name-d77cbfccd11948f2b9f52f104236a3e447753131603d3851d27de01fc8b31b2c.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(149).JPG-name-9d40f154dd661c8a4e6be36e7cd0529c2a8e645ef5392cb00fdc799659a967fe.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(152).JPG-name-068d749781b1e31bfddab7759ff2ba3b61863e58b379af812a305302fbb190c2.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(34).JPG-name-72f0d4f5e4537db1eb754f7836ef95e04bd4ff395d08bdf9b97d90708cc44884.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(39).JPG-name-2ba7e5a5cdc40e31e6d66a480174e47e14dc29e5f2d41fad943615b542799e02.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(40).JPG-name-7705fb35fa65d979d329f6bbff3941a8a998f0ccfe96bc09c962a1495b0f26f8.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(57).JPG-name-eecfbff97be18bb62b63e3cc81242b744a9fece8c75f1e18c5a8d591dcbbfb4e.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(63).JPG-name-570a3eaba610ca83e76917eefbdc52ffdc7048cc3da51c67792eba8bc3d38db4.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(2).JPG-name-102f81b267012a8cdeaf88f6e39a188637b00b06a5e5dbf81112e22c19010760.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(5).JPG-name-e55134480ad610e99f375a760de60b6a3987afe301d42f9c5a31760eea647fff.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/9ffa8e6d-cd2f-49c6-8623-6dc4e634fcce/galleries/pictures/FOTO_(6).JPG-name-512512a7e0771dcdaf2573065d87d3708d6aaffe2c7fcd4b40e5b245e546d3a0.JPG"
    ]
  },
  {
    "slug": "ocean-breeze",
    "badge": "Pronto para morar",
    "title": "Ocean Breeze",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 4.233.764",
    "tipo": "Apartamento",
    "description": "Ocean Breeze no Centro, Balneário Camboriú. Pronto para morar, com 1 apartamento por andar, 3 pavimentos de área de lazer, piscina adulto e infantil.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/1638383424373_d78208d7-6578-4433-b5c0-f2d1c18a092f.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383097651_0a157bdc-57e9-4248-abd3-1890719d1f8b.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383102807_d9e98974-b730-4ab1-bdc6-443595a3b29b.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383429633_9d264dfb-fbd8-41a6-9272-588d2a138aa8.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383415509_eae9dacb-9138-4b22-b333-380d9e8e4a36.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383419793_ac4dbf62-a15c-47aa-8e83-fb9cb4e03278.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383411248_47f158d7-2aeb-4b26-a2f0-a28b80c73085.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383166870_d98440ec-da8f-4fcd-9a72-d788a4a7303c.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383396074_c9cb0e32-7ff5-46e8-998f-91dc1a042058.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383124870_c9018ee2-ef4b-4bb1-b087-56db6088f7ce.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383407278_ed84015a-b8e4-47af-b57f-ca0a0422e0d4.jpg",
      "https://dwvimagesv1.b-cdn.net/1638383403479_94f6bcca-4e48-4740-b314-5aa0c169e823.jpg"
    ]
  },
  {
    "slug": "dolce-mare",
    "badge": "Em construção",
    "title": "Dolce Mare",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 2.900.000",
    "tipo": "Apartamento",
    "description": "Dolce Mare no Centro, Balneário Camboriú. Em construção, com infraestrutura ar condicionado.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/DOLCE_MARE.jpg-name-fef0456eca3b77c2bbb230a85a9c6be0c840890e28bccf9fd242159c570543bb.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/7247081fa68b7954153550300eda3a8015bc65ff430345a5070e53bb52b7bbbf.jpg-name-5bfda217fd7e449136f703f01006e4408ebf3c51a61b90694511e2113e5f2958.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/15.JPG-name-50bd68cac312f3865abe5fc351e84c393ee64dd182ec31e707acdf8a101d494b.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/18.JPG-name-57f106a96681033c5011a7cf50a9919fae10cd0fa639c96c97c922c7f2156e83.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/19.JPG-name-562143dc268b3a8948e8627c220fdc4dc79f731e5e219dc7e2ae2462a4383d64.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/06.JPG-name-c77bdfa11f8e7e3cc69cfb7b6a7b69e846d2277497f77ffc43d90ad1c220e28e.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/21.JPG-name-8c130f197b0c7f3ba93bb04cf7704da370330c1109adb760590f1446e9c6d96a.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/16.JPG-name-64178c26f9d49ac878419376f6da3a84965a27e9fa0c4ecc970d7463364d7e60.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/17.JPG-name-6a9960c58b9f00cbbd43a000cd1dec83a6684b985dd0897060434da69bdd10e6.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/14.JPG-name-dd78a26faa1d2efa8eaaf795dafc992080aa65f42ecc97e212a607416bd54a56.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/13.JPG-name-cea6f0621036c55a400934a1a2417eacf97cb4847bed86824d52528e3c46299f.JPG",
      "https://dwvimagesv1.b-cdn.net/images/developments/24b5a4f2-19a2-4bac-927a-bf27906944cf/galleries/pictures/20.JPG-name-470a5fc5459d269b80543b83d5c86f92666dcd158c5066d3637cf504fb387a8a.JPG"
    ]
  },
  {
    "slug": "135-jardin-silva-parker",
    "badge": "Em construção",
    "title": "135 Jardin - Silva Parker",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 6.100.000",
    "tipo": "Apartamento",
    "description": "135 Jardin - Silva Parker no Centro, Balneário Camboriú. Em construção, com previsão de lançamento: outubro 2020, 01 torre residencial, 62 unidades residenciais.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/1.Fachada-1.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/24..jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/16.Piscina.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/25..jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/26..jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/15.Piscina-1.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/14.Piscina-1.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/10.Quadra-1.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/23.-1.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/17.Garden.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/20.Vista-Living.jpg",
      "https://dwvimagesv1.b-cdn.net/upload/2020/03/22.Vista-Suite.jpg"
    ]
  },
  {
    "slug": "harmoni-ocean-front",
    "badge": "Em construção",
    "title": "Harmoni Ocean Front",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 15.081.000",
    "tipo": "Apartamento",
    "description": "Harmoni Ocean Front no Centro, Balneário Camboriú. Em construção, com áreas sociais mobiliadas, box de praia, gerador de energia para elevadores e áreas comuns.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAH_H_FOTOMONTAGEM_OP_01_EF.jpg-name-087285201cb11687f6208b2897bdea417bd19a713c95b53338b20a07474d0ff1.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_FACHADA_SUNRISE_CAM01_EF.jpg-name-59ae5aeb6f13114bae39420f7a0990fc66dcc4962dc04efff45b68b160419115.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JR_H_EMBASAMENTO_C01_EF.jpg-name-627a79dc317d6001963289131f64d7c9496ec4820c3fc0963ad54ca0fecd34fe.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JR_H_VOO_PASSARO_ANG_02_C09_EF.jpg-name-180d893d87937b3feb8d841907a28018e54f86fc6712cf5352f005d4f1a82bda.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_AMERICAN_BBQ_EF_web.jpg-name-34fff6eeadb51f9aa2220df646aa8d50d10e1bc7f71e3d60335c1f38743ba80d.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_PISCINA_LAZER_03_EF_web.jpg-name-080112458bd202df0880cef0bd2c61561e80d07dd5a3ac98b950e85f6435dca2.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_BORDA_INFINITA_LAZER_03_EF_web.jpg-name-f194c680179b1b0daf8578e7f710ceb0c820a4548814234d7335c6cb9df3068b.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_DECK_PISCINA_LAZER_03_EF_web.jpg-name-c0e246dda7df3b1e43d2a845554761e01a6ea399e99edcc04c5c9813b23c414a.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_PET_CARE_EF_web.jpg-name-a240e0d4453aaa18bf9cfacd4d025818e7052d80c61afb70f6cdc8f6be88f62e.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_PLAYBABY_EF_web.jpg-name-110ebb5f6db1915e4fb773e372c6715c883dcec768d1272bbf6a5293da169ea9.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_PLAYGROUND_EF_web.jpg-name-d482e2be83118a2a372da5e0aefaa953c4c8ff21526cbccc99fb856ffb429f34.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_SEMI_AEREA_GAZEBOS_EF_web.jpg-name-ba6e5615c1b03f9b2456782cbca732138cb862f4c2d2c667b677528bb11f1ad4.jpg"
    ]
  },
  {
    "slug": "azzurro-arrka",
    "badge": "Em construção",
    "title": "Azzurro Arrka",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "Consulte disponibilidade",
    "tipo": "Apartamento",
    "description": "Azzurro Arrka no Centro, Balneário Camboriú. Em construção, com adegas exclusivas no rooftop, fachada balcon infinit glass, apartamentos 1 por andar.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARRKA_AZZURRO_Fachada_Blue_C2_EF2-1.jpg-name-81d561588c7afe3a932d97393ab319dba9017fc18c3401ef322eebb1db36ac60.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARRKA_AZZURRO_Fachada_Diurna_EF2.jpg-name-b002fe16c9808674fac57a4f8aa066724f6985deb9892b9b4816e976be81b0dc.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARRKA_AZZURRO_Fachada_Blue_C1_EF2-1.jpg-name-621649564cb36deeb66d37ed7bb303f5878492212acb763ad975c48f98236d88.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARRKA_AZZURRO_Fachada_Frente_Mar_EF2-1.jpg-name-07e96617ba5c7d0836c6307f6c5b809298a7ea0ac8ad0c8551112fd3da2617a9.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARRKA_AZZURRO_Fachada_DJI_140_EF.jpg-name-2f2aceee9b3dd45493ace3574804d560a76d41b5ecf2afec88515f83644396d3.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARRKA_AZZURRO_Fachada_DJI_114_V2_EF2.jpg-name-49c1082febf244e0f39782f07f442358014c5bd5f37b83641ca359d66b3247db.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARRKA_AZZURRO_Piscina_C3_EF_(1)290323.jpg-name-92d708a602e617a8408954873a51a2f2a604ddfa138b5175f8c175ab5d39eb7c.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARKKA_AZZURRO_ROOFTOP_Jacuzzi_EFb290323.jpg-name-011392982098d5db02903ed05bef4b07309076435a252401d971399bd9951916.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARKKA_AZZURRO_ROOFTOP_Jacuzzi_Instagram_C1_EF.jpg-name-f07f457fc68e31421da877027d972e14bc806d4515606a7a20804262c97b7370.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARKKA_AZZURRO_ROOFTOP_Jacuzzi_Instagram_C2_EF.jpg-name-7e4eb77d388f4fba413b405ea2c6e08c2b45d70c16be688bb53411218b360b01.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARKKA_AZZURRO_Terraco_Garden_EF.jpg-name-0e1411c629ef463983e666939ef715919e005616bf4518df810df58ad138bd53.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/e0be0efe-de1e-494d-a978-9c7270c119ee/galleries/pictures/ARKKA_AZZURRO_ROOFTOP_GardenFire_EF_(1)290323.jpg-name-fc6a0aa395318a3e663cf2cf81d7b80c224302f5e0f63a873d8ad9329f8c2236.jpg"
    ]
  },
  {
    "slug": "admira-arrka",
    "badge": "Pronto para morar",
    "title": "Admira Arrka",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 3.720.000",
    "tipo": "Apartamento",
    "description": "Admira Arrka no Centro, Balneário Camboriú. Pronto para morar, com 1 torre com 25 pavimentos, 3 salas comerciais, 3 pavimentos de garagens.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF7607.jpg-name-f90bd47374308953e8008730af735cdc3714648af0aeb7798daad3e3e782da9f.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF7592.jpg-name-5c7367d2b62a474280cf120579c47e10ccf2a7a13fedf78e566f590b0985670f.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF7559.jpg-name-cb7af2f287218f3f853fc77d3365d536b4f223d934862f2be0b82170a5780a28.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF7555.jpg-name-8cbcb2e63fd05034b2b341c3ccc958cb0690eb6fd005c63a59b26cc0c2fdc2e7.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF7572.jpg-name-a54e33b4221dc688fa91a28ce3a5365775c3bce69aef9d4a4ae67e57b79b6ddf.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF4975.jpg-name-7d0af70122a8af115919d6075ee6a8d975098be3e453f9bb2ef791b1d8d47d9f.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF6615.jpg-name-ea8f683a9d44d1831e02b9de861889d3b5e4bd426d1150bc2e2e3d4a14aac777.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF6700.jpg-name-fec9d0f8464a0870a69efe614a9d3a3a1b85b666f8b691172337e72644da392f.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF6494.jpg-name-97c970c7809e598987ab24b02beda1d9ca59406d865ad74bd0dbe6f2c5d3f441.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF6364.jpg-name-700e0e6277c8b2bed4a7fedbc82c329864acc4c212283ec684cb3ac569225185.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF5933.jpg-name-b755986fe7d226fd3e026779894e3aa6898b521bae8d47ad3948aba6d1554f3b.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/43928288-b467-48e1-8c02-c837f3f3651c/galleries/pictures/_AEF5534.jpg-name-35d24b88e966c19a001f97468e86470f85b450475932f8e13012140760230162.jpg"
    ]
  },
  {
    "slug": "serenite",
    "badge": "Em construção",
    "title": "Serenite",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "Consulte disponibilidade",
    "tipo": "Apartamento",
    "description": "Serenite no Centro, Balneário Camboriú. Em construção, com tipo com 3 suítes, cobertura com piscina, diferenciado com piscina.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/d867b58fa1c621e3a30f4a1669e36fad6a8d8edac46fb39cf8770ce81cb1e356.jpg-name-cec1a04d80b7b8fe879caeffd16e104ef9aa7e9da00b4b4118eb06c286a21286.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/01_NOTURNA.jpg-name-0f715954f219404146df355c452fc430b454bb84007d30661a163672ad3a4fbc.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/03_NOTURNA.jpg-name-5b5ebb4c4b78ff53246664f8970ebacc3850569b683c8f53b0e5246ba425d5c2.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/11_TIPO.jpg-name-d9d3a0bbbd81e28296f3343ef8c7297a5ea50960d8a3e7b45f9526c8778691fe.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/12_TIPO.jpg-name-2fd4c1706b3ce310c90c2521f2e606df500f9dcb5cbd12eeeb8861c531294b46.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/13_TIPO.jpg-name-d52618e60e3992c19cb003706a3ff4b6e60a7c6d89875e459efea388293ec543.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/14_TIPO.jpg-name-0c79fd6c6e65911dc3956e5cedd1dadb4b983d85665cf40bf4999a2a2c577262.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/15_SALAO.jpg-name-0ad6b426a74ff9f38110020e9abc9edf46612103966760ba561b4d46543ca127.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/16_SALAO.jpg-name-b530192391c64985a5e66afe1db80ce0e2fb0c49d192eb8a5dae251e29151cb0.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/c0a121d2-a455-4b2a-b857-4a565ff8d7fe/galleries/pictures/17_PISCINA.jpg-name-5cecc86f063030338758de3296d5fd5dc9a640303b7bc7341061fda17199e925.jpg"
    ]
  },
  {
    "slug": "filipinas-residence-macon",
    "badge": "Em construção",
    "title": "Filipinas Residence - Macon",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 2.150.000",
    "tipo": "Apartamento",
    "description": "Filipinas Residence - Macon no Centro, Balneário Camboriú. Em construção.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/3728e401164f43b4da41859e7c6fada48c4002fc07f72fa2e787e31b0a2da372_1_.jpg-name-3513bc9a3f5fc11e37d18fd497e1d229c61a7cd031759c69f8e5e2cf179782ce.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/03_FACHADA.jpg-name-ce00866bc262312e0378c6d8c3abff5cccd853425ebb43d016ca0eb335d4def5.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/02_FACHADA.jpg-name-9ea55a8361d5617687d40fba4624eba0e8be955a122bda8945bfdfc293a22799.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/04_FACHADA.jpg-name-2b883a128b2235f8104b94a89e886eedf1d95fb6679b76a18fee83a5fcad0d5f.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/TERRACO_COB_TIPO_02.jpg-name-9bf1455ccbe920bf311fdf44bdcf7618581f1bb289ceb84f3fd5960d63454a05.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/TERRACO_COB_TIPO_01.jpg-name-8b55a044ddc9d109c5361a79a57fbd175219e40e797490312b10961df85f7314.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/LIVING_COB_1.jpg-name-1bd13ee5a26fc224c56645b52828a8e0ab8dd9533ffb08e6217957809781e20b.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/LIVING_DUPLEX_TIPO_02.jpg-name-84c84f408e0f5f37033a8a4322b7840545b3c3554f9ba941c0fccc5b473c6b42.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/LIVING_TIPO_01.jpg-name-fd527e2d8bf486319576c050ae0f44eca8ea8b61746bf38ab73ebbace7d01f1d.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/TERRACO_GOURMET_COB.jpg-name-06ae914c3080e3a1b86e41cf329cb732fa0aab5fea9ec35d8a335f883728baa2.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/DORMITORIO.jpg-name-e069190705a29c3d3910ba5114ecbc697dce143555c18d2132ae491d9ccac9b2.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/87194fa8-0001-4b0f-8542-f1427c28f1fd/galleries/pictures/DORMITORIO_2_.jpg-name-3b2ab1bc0216893453bcbbefe4acd7f53f58222d60658fc097852ae8164f0913.jpg"
    ]
  },
  {
    "slug": "newport-residence-macon",
    "badge": "Em construção",
    "title": "Newport Residence - Macon",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 2.440.000",
    "tipo": "Apartamento",
    "description": "Newport Residence - Macon no Centro, Balneário Camboriú. Em construção, com garden lounge, office, fire place.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_04_FINAL.jpg-name-a1246ee58f8417246b6e1eb22560379bbdbca23bc5781ff1edad2c62af8b7880.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_01_FINAL.jpg-name-a4c4f90c4baaec7a0d3ce41cfa3e7ac63087a56d22d3911c6bb82161dbc5186a.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_02_FINAL.jpg-name-b157a7ae9ec841bd2fe9fcb2df2769aeb6ee890eeeba6d8bde8d786ea46794c4.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_03_FINAL.jpg-name-4d1bf4ab6866fcca13bdab6b0a01cc00c875ec9d2e3da50024935eec0f2891c1.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_05_FINAL.jpg-name-c9407f61019be7f4ab344a27ad96a30d05d7bd0848b251e46231876fbf9e5b63.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_06_FINAL.jpg-name-648c23287a99856bab01adc30480a6e6763489ef8c416caf5853d28ff05d1a65.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_25_FINAL.jpg-name-b148c94c8dd71b9f4824ed2ecb3bcf82855f322c766abe1e4b30889c4757e6bf.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_26_FINAL.jpg-name-f11efb3e4bc62c3deca2294ce198453d630c4e0a3daad451a00f3a36ced23e17.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_07_FINAL.jpg-name-fe2bebe78a0cd866bda10ecf1deeca85c6d58990af35c1c63c36165e85b7c4b0.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_08_FINAL.jpg-name-d06b71f0c3e9eac811d4052a940aef24eb90c58ed4b681f564c3d0ecd6e3f0db.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_09_FINAL.jpg-name-18d4f766145b8520f944cd6a55a9002c3bc8b1bf3ad5c805b0d2776913ca6eb0.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/a8b44f75-257e-431c-b96a-ae0f8bf423a2/galleries/pictures/RENDER_10_FINAL.jpg-name-17342aa7984b6163b4350064e4bb27731d1b4ecc6123863570bc2781422dc108.jpg"
    ]
  },
  {
    "slug": "garden-park-home-clube-fg",
    "badge": "Em construção",
    "title": "Garden Park Home Clube - Fg",
    "bairro": "Pioneiros",
    "bairroSlug": "pioneiros",
    "price": "A partir de R$ 2.536.000",
    "tipo": "Apartamento",
    "description": "Garden Park Home Clube - Fg no Pioneiros, Balneário Camboriú. Em construção, com espaço zen , espelho d'água , sala de massagem .",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/FACHADA_GARDEN_01_6K.jpg-name-e8a1f72606660c65e8fed1ad434909048b9f7630d6035a8597e3001bfe991d06.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/1.jpg-name-96a61a3ea4941430216024e797d64f9f92294f1f250f40ba17189d657ffd621c.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/2.jpg-name-4914e78bf68717fb503cd1f02a44bee7ebb0929ab59089e5e6a854be8ce05efa.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/3.jpg-name-41af69ad363c462c6b27de7fa1f73dfd721fdb5b13f53731dcd8f7d3797356b4.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/jardim-interno.jpg-name-cafa080c9db41058e543979b9a120a036ca79caaa2262e878e364128efd1f4fa.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/14.jpg-name-d82c59d35582cf6d86838b7460611b01616f39f098af6a6378b6365ec6aac257.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/15.jpg-name-bacc0296298235c732fc2c74deb1a807246e7bf98c8e088548811ed649a38b56.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/5.jpg-name-1ed7e991392a755a3802a081ad36503524c8c7180ac09998346c9472dade4b0b.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/6.jpg-name-4f455908639ace39077fd7a62621d304808df5758d62d7d3e54246019f8a53f4.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/7.jpg-name-3482eb15de0ccf57972d6498a12a46194f57e4ff9734a5e03678d8587acf868a.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/8.jpg-name-5a69a89728f6147f78c1d4b517310cca3dacf417430152c7805cfe99d2582661.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/36f8314f-40ca-425c-8d7f-c686b30315d3/galleries/pictures/4.jpg-name-76af3348a585451f3877e105e0d127a507ad35e4510e285c184cb5b59e1fee29.jpg"
    ]
  },
  {
    "slug": "versus-ck",
    "badge": "Em construção",
    "title": "Versus - Ck",
    "bairro": "Fazenda",
    "bairroSlug": "fazenda",
    "price": "A partir de R$ 626.030",
    "tipo": "Apartamento",
    "description": "Versus - Ck no Fazenda, Balneário Camboriú. Em construção, com pilates, spa com hidromassagem, sala de massagem.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/b1582f0fd93da91abe08fe5b96b4f53a334760e945ff97b362d2c773a7b0645a_2_.jpg-name-3b78c616a2fd360329633ed10435a348034c25860927a63728719bf013cb550e.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_07_HALL_FINAL_V2.jpg-name-d73c87961614cf8129e2f0db69173933c93f612325100309751b66f17a3f5a14.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_09_MINI_MARKET_FINAL.jpg-name-c743a2e03ba9a943d67e516be99d4ff759647f2621ed50d13157928420d72388.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_10_BICICLETARIO_OFICINA_R01.jpg-name-6d1ba6eea5a8bb3a4d4b0af77a3f5077c0dda955b4685bf3bf320d3ace3a869d.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_11_ATRIO_VERDE_LOUNGE_LAZER_FINAL_1_.jpg-name-f6d42452b1a6fc5a61da935cdbcb54a866b18032bb7ca4ef727b1fc014d5611a.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_12_PISCINA_EXTERNA_CAM01_FINAL.jpg-name-8f54c346c035ca380a80a36776d23927622a28652b41de297e5729de7ebcf6e8.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_12_PISCINA_EXTERNA_CAM02_FINAL.jpg-name-530b42e45432f3211c6678be66b4b704e1177fa8c795ec348875aa9f4f515eb4.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_14_TERRACO_01_PISCINA_FINAL_1_.jpg-name-ce24711f2bc61189104df0b8c003e3f804d2a072fb217256990ea5b293302126.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_15_SALAO_FESTAS_1_FINAL_1_.jpg-name-5d9a4f530d0be8312d2222337847e23d88a818a7714ad6317f1a70f7e502e133.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_16_BRINQUEDOTECA_FINAL.jpg-name-2a00833d5f463268ced9e8ba3a3cde10e7bb497a2e437f4daa2385bc40191d8f.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_17_SALAO_DE_FESTAS_2_FINAL_1_.jpg-name-524540802060352501cf25d679f28c242ffbe1c0ebe65b87a1197d221d0fc63c.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/2475cd21-6d7a-4c3e-835c-10897cdb4780/galleries/pictures/25_162_18_SALAO_DE_FESTAS_COM_JOGOS_FINAL.jpg-name-1d5c2e4cdd3844f7d37e6d9d5d94f80807bddbddc13e605816a0c417bdf3aef4.jpg"
    ]
  },
  {
    "slug": "memorare-rosecon",
    "badge": "Em construção",
    "title": "Memorare - Rosecon",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 7.659.886",
    "tipo": "Apartamento",
    "description": "Memorare - Rosecon no Centro, Balneário Camboriú. Em construção, com 02 salões de festa, 02 espaços gourmet, sala de massagem.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Fachada_Noturna_Rev_00_01.jpg-name-3111745cce7be6ea03db37571982dc3892d541eba4783291a5594ed44d523289.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Fachada_Rev_00_01.jpg-name-c532c7eb1d9584a794964cfb0ccc05387fe35dd5c1b68d978b066af916af9680.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Fachada_Topo_002.jpg-name-fe00d80d0ffd23c2836ef752687da43a331f552692d783b6fa675ab757c41290.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Fachada_Montagem_BAIXA.jpg-name-5f29e7ad6bb5cc905ca1307ab5dc8db409d4875315fabfd6a817bdcc6e086f75.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Fachada_Angulo_Noturna_BAIXA.jpg-name-93e53a5b6e43e76ebb3997e456cfab24d0b9f51205cb9afd7bacea3fd9670d4b.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Salao_festas_Rev_00_01.jpg-name-fe78bbf33f4f5272e022ff1eb013ac2a84cba2468987e470f9147618362b6634.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Academia_Rev_00_01.jpg-name-3c5b1e81c0ec3e05053df86bc0e5666af91479ebfd257904b78856927dcd977a.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Gourmet_externo_Rev_00_01.jpg-name-b6559414621fb34ef39baa4efc49bf7b66696d0c23d5576c4c656ce77a718e65.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Sala_jogos_Rev_00_01.jpg-name-71b24b2b5ef8bb599298746768137cd34dbe934f011dc63f75308e3d87ad5807.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Piscina_Aquecida_BAIXA.jpg-name-e5d61a2bc7b8f09fbe253e9df845c4f834da221939b42f2e987dde41b516958e.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Piscina_Ext_BAIXA.jpg-name-9a9d263b50e325d94cfcc58926492e72aafeb3b2de30743bcbce8bf47952a55b.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/14e93ebb-901a-41d4-8942-89a2beea0517/galleries/pictures/Playground_BAIXA.jpg-name-043c2e89af110c381a477c555fa06c490a50e0068909ff18d39909ffe0fce884.jpg"
    ]
  },
  {
    "slug": "hyde-embraed",
    "badge": "Em construção",
    "title": "Hyde - Embraed",
    "bairro": "Centro",
    "bairroSlug": "centro",
    "price": "A partir de R$ 12.375.220",
    "tipo": "Apartamento",
    "description": "Hyde - Embraed no Centro, Balneário Camboriú. Em construção, com the pool, garden gourmet 1, garden gourmet 2.",
    "images": [
      "https://dwvimagesv1.b-cdn.net/images/developments/9fdeb647-aff9-43b1-bc12-63d5664d0c23/galleries/pictures/HYde.jpg-name-817baa6e241f593e33d6f351a2922630b064ae0b6783fe4a7f0adcb86f13c29a.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/9fdeb647-aff9-43b1-bc12-63d5664d0c23/galleries/pictures/fachada_1.jpg-name-7dbbf034606a72848a7f2263ee418e04e0a85fd19e153ce6de316b974bbf8d07.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/9fdeb647-aff9-43b1-bc12-63d5664d0c23/galleries/pictures/EMBHY_36_Fotomontagem_Diurna_P1_vertical.jpg-name-9c2b28c0404ae6101a46dc96a08a83f8b61a9d4a9f5f50bc4f5f6aacdb3ac777.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/9fdeb647-aff9-43b1-bc12-63d5664d0c23/galleries/pictures/EMBHY_34_Fotomontagem_Golden_P2_vertical.jpg-name-35a1be2c0e8474da0b94839a7f5204e6ab31d4ae36f044fe454e25d1d90d09c0.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/9fdeb647-aff9-43b1-bc12-63d5664d0c23/galleries/pictures/EMBHY_36_Fotomontagem_Diurna_P1_(1).jpg-name-f3b77d0d7fc115283f6958f0ba35a05a0f1f73ab4908c1697ad53f64c9d55775.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/9fdeb647-aff9-43b1-bc12-63d5664d0c23/galleries/pictures/EMBHY_34_Fotomontagem_Golden_P2.jpg-name-da520268dc804a18bf5cd7c56b4a28fb7cd9f0fdd9070906396a1889d86b4fa7.jpg",
      "https://dwvimagesv1.b-cdn.net/1681851953187_1510fd33-be42-4b27-8c2d-f021cb28770b.jpg",
      "https://dwvimagesv1.b-cdn.net/1681851990722_a7278e98-9890-42bb-a0f9-b489a53615fb.jpg",
      "https://dwvimagesv1.b-cdn.net/1681851952297_ba08e31d-14f1-4c69-9789-70c2dbb05aec.jpg",
      "https://dwvimagesv1.b-cdn.net/1681851967965_43045ed5-4850-4315-8ee5-fdc3de155831.jpg",
      "https://dwvimagesv1.b-cdn.net/1681851951510_31a428df-f140-4f3a-97f9-0a4ab3cee7ef.jpg",
      "https://dwvimagesv1.b-cdn.net/1681851964799_114626f5-8f60-42c4-bfc4-1a945a694af5.jpg"
    ]
  },
  {
    slug: "harmony-ocean-front-centro",
    badge: "Frente-mar",
    title: "Harmony Ocean Front",
    bairro: "Centro",
    bairroSlug: "centro",
    price: "R$ 39.856.000",
    specs: "6 suítes · 6 vagas · 410m²",
    tipo: "Cobertura",
    description:
      "Cobertura frente-mar na Avenida Atlântica, Centro de Balneário Camboriú, com 410m² e rooftop a 185m de altura — o mais alto do Brasil. Empreendimento assinado J.A. Russi, com heliponto homologado pela ANAC e concierge.",
    images: [
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAH_H_FOTOMONTAGEM_OP_01_EF.jpg-name-087285201cb11687f6208b2897bdea417bd19a713c95b53338b20a07474d0ff1.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_FACHADA_SUNRISE_CAM01_EF.jpg-name-59ae5aeb6f13114bae39420f7a0990fc66dcc4962dc04efff45b68b160419115.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JR_H_EMBASAMENTO_C01_EF.jpg-name-627a79dc317d6001963289131f64d7c9496ec4820c3fc0963ad54ca0fecd34fe.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_PISCINA_LAZER_03_EF_web.jpg-name-080112458bd202df0880cef0bd2c61561e80d07dd5a3ac98b950e85f6435dca2.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/images/developments/fbafad8c-9ec7-44df-9d03-040b3dbe353d/galleries/pictures/JAR_H_BORDA_INFINITA_LAZER_03_EF_web.jpg-name-f194c680179b1b0daf8578e7f710ceb0c820a4548814234d7335c6cb9df3068b.jpg",
    ],
  },
  {
    slug: "bremen-dorf-pioneiros",
    badge: "Exclusivo",
    title: "Bremen Dörf",
    bairro: "Pioneiros",
    bairroSlug: "pioneiros",
    price: "R$ 4.525.000",
    specs: "3 suítes · 2 vagas · 190m²",
    tipo: "Apartamento",
    description:
      "Apartamento de 3 suítes nos Pioneiros, assinado Werner Walter, com espaço zen, homebox e infraestrutura para automação residencial completa.",
    images: [
      "https://dwvimages.sfo2.digitaloceanspaces.com/1631622847776_18340afb-3cb5-48fa-a8d3-520e8b78dd62.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1631622854450_32520793-3c87-4a28-8f1c-7d6853cf1a24.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1631622851332_d1a0d608-a420-4149-aadf-473bfe57e861.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1631622858235_f756f748-18c0-4ad0-a3e9-dfae547d200f.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1631622842223_09e09552-2a11-43b6-8917-133f1b0c22fb.jpg",
    ],
  },
  {
    slug: "ena-praia-do-estaleiro",
    badge: "Frente-mar",
    title: "Ená",
    bairro: "Praia do Estaleiro",
    bairroSlug: "praia-do-estaleiro",
    price: "R$ 33.123.948",
    specs: "4 suítes · 4 vagas · 579m²",
    tipo: "Apartamento",
    description:
      "Apartamento de 579m² pé na areia na Praia do Estaleiro, com vista mar permanente, 2 elevadores sociais e certificações Fitwel e GBC Brasil.",
    images: [
      "https://dwvimagesv1.b-cdn.net/images/developments/7dff62ea-961d-4d85-90eb-b49c9c8606dc/galleries/pictures/WhatsApp_Image_2025-12-22_at_18.14.22_8_.jpeg-name-bfe8697f58a297123d7a0f16dcd191566bd40479a15efd2c8da80d0a1ecd6d6c.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/7dff62ea-961d-4d85-90eb-b49c9c8606dc/galleries/pictures/WhatsApp_Image_2025-12-22_at_18.14.22_10_.jpeg-name-7fcc3b082980f519d73d65658f5a6792a12ceab67a0d54b7368d45e2c6189a82.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/7dff62ea-961d-4d85-90eb-b49c9c8606dc/galleries/pictures/WhatsApp_Image_2025-12-22_at_18.14.22_7_.jpeg-name-2edd492d746dea3a05d2ab7d8d06b69cf73e029093f74986612b56930e0ff54b.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/7dff62ea-961d-4d85-90eb-b49c9c8606dc/galleries/pictures/WhatsApp_Image_2025-12-22_at_18.14.22_4_.jpeg-name-c02cacd1fdc12bce227bfe5fa358a528de51db41987b4879587f40eb42375737.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/7dff62ea-961d-4d85-90eb-b49c9c8606dc/galleries/pictures/WhatsApp_Image_2025-12-22_at_18.14.22_5_.jpeg-name-95b55fcdfbc2da8eaf9b97073d49812d674c139eb11d074f39489137f996cf50.jpeg",
    ],
  },
  {
    slug: "sancho-centro",
    badge: "Novo",
    title: "Sancho",
    bairro: "Centro",
    bairroSlug: "centro",
    price: "R$ 2.250.000",
    specs: "3 suítes · 3 vagas · 122m²",
    tipo: "Apartamento",
    description:
      "Apartamento diferenciado de 3 suítes no Centro de Balneário Camboriú, assinado Baggio, com entrega prevista para 2028.",
    images: [
      "https://dwvimagesv1.b-cdn.net/images/developments/77a80537-7717-4cc5-9a17-c18e9f677b20/galleries/pictures/592d3be8-c3b4-4c9c-8f23-05b260060ce0.jpeg-name-4eafb955db2b77e3dfdfc187dcfb437dc1c061df2e3e706893d3618e10bdae61.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/77a80537-7717-4cc5-9a17-c18e9f677b20/galleries/pictures/5c5b0c1f-e22f-4a7a-8814-51b9493e4eff.jpeg-name-29c9015b4ebf74b98e8b8960f1489767de9031492a325077c2cfe39004df4a35.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/77a80537-7717-4cc5-9a17-c18e9f677b20/galleries/pictures/2be3f520-4418-4b43-95bd-03b168c1beee.jpeg-name-d157c743deae0fd10a8e92f224acd04aa059e804f43d822f233eb994bd23c24c.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/77a80537-7717-4cc5-9a17-c18e9f677b20/galleries/pictures/45a58279-3896-4ea0-88e2-3afbbebd4f81.jpeg-name-fa0e165cb91a8bc8826079bb145fcd1878cd5ef016151743c8414e06184a0037.jpeg",
      "https://dwvimagesv1.b-cdn.net/images/developments/77a80537-7717-4cc5-9a17-c18e9f677b20/galleries/pictures/50ad0160-a5e5-44df-a8d6-f375a6f752a6.jpeg-name-6115307c58befdaf575ddcfe8be5a6915e55b72a69ecb3a8b61da559ca191b05.jpeg",
    ],
  },
  {
    slug: "magic-sun-centro",
    badge: "Alto padrão",
    title: "Magic Sun",
    bairro: "Centro",
    bairroSlug: "centro",
    price: "R$ 5.100.000",
    specs: "4 suítes · 4 vagas · 251m²",
    tipo: "Apartamento",
    description:
      "Apartamento diferenciado de 4 suítes no Centro de Balneário Camboriú, assinado Baggio, com 251m² de área privativa.",
    images: [
      "https://dwvimages.sfo2.digitaloceanspaces.com/images/developments/9740bd11-2a72-45c8-97da-376fe33b9129/galleries/pictures/ecd3b7ae-dccb-4bf6-8b4b-a085fdda855a.jpg-name-20ae240144e67b029b8011189f0299955648272f786b089282d61107127feefe.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/images/developments/9740bd11-2a72-45c8-97da-376fe33b9129/galleries/pictures/ebc9148f-1463-4c28-aaf2-4cd1b55df1fe.jpg-name-2e9699e0f050f85e5b5d65c3c2211e737c70cbcdb4a9ec127c53224997fa179f.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/images/developments/9740bd11-2a72-45c8-97da-376fe33b9129/galleries/pictures/bee1f60b-a5d1-44cc-969f-ef8b01e03798.jpg-name-32d1b6db956bc478b80f8c956be9e62146b3a2f99b4928f02d22cf62dc3eded9.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/images/developments/9740bd11-2a72-45c8-97da-376fe33b9129/galleries/pictures/ad4febf8-3add-4285-ba19-abc8c7c9ef60.jpg-name-0aab1f683e80d9b27462412901c15d590a14ee7162984ac5c2f1d057321f3f81.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/images/developments/9740bd11-2a72-45c8-97da-376fe33b9129/galleries/pictures/53f1569e-7e63-47bb-9c5b-20f84094a9f5.jpg-name-3607b0e636189fed307417f8dfb090758893021a18540a133efc60a2fbc6f05f.jpg",
    ],
  },
  {
    slug: "summer-sun-pioneiros",
    badge: "Família",
    title: "Summer Sun",
    bairro: "Pioneiros",
    bairroSlug: "pioneiros",
    price: "R$ 3.222.000",
    specs: "2 suítes · 4 vagas · 178m²",
    tipo: "Apartamento",
    description:
      "Apartamento de 4 quartos nos Pioneiros, assinado Baggio, com área de lazer completa — playground, salão de jogos e coworking.",
    images: [
      "https://dwvimagesv1.b-cdn.net/images/developments/6fb528fb-a5ad-425a-b468-4492e80f8e87/galleries/pictures/Fachada_Noturna.jpg-name-ab2337b4b0bd74ff2e931b191403db33a3d268e961ff9979e9a4febbf5d8fa49.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/6fb528fb-a5ad-425a-b468-4492e80f8e87/galleries/pictures/Fachada.jpg-name-ff9c4689b117d2e8945cd03ae91675cc49a2b936ec83f91734a58d400662dc08.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/6fb528fb-a5ad-425a-b468-4492e80f8e87/galleries/pictures/Piscina.jpg-name-6fc3acef407276182682f563b631146e3ce092fb4b37ccc8e038e8b3046b02e2.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/6fb528fb-a5ad-425a-b468-4492e80f8e87/galleries/pictures/Playgraund.jpg-name-72e8f81117d8c94bdb0be7ad99e129f42da21624ba6f6cb9cff7eb48b130e292.jpg",
      "https://dwvimagesv1.b-cdn.net/images/developments/6fb528fb-a5ad-425a-b468-4492e80f8e87/galleries/pictures/Salao_01.jpg-name-278bb7ebfeec4cffad0f7a971109b0c5ab88ef0ee36e0a8c0e89e5972a214bd0.jpg",
    ],
  },
  {
    slug: "zenith-tower-barra-sul",
    badge: "Exclusivo",
    title: "Zenith Tower",
    bairro: "Barra Sul",
    bairroSlug: "barra-sul",
    price: "R$ 8.086.923",
    specs: "4 suítes · 3 vagas · 255m²",
    tipo: "Apartamento",
    description:
      "Apartamento diferenciado de 4 suítes na Barra Sul, assinado Benveartt, com fachada envidraçada, estação para veículos elétricos e sacadas estilo balcony.",
    images: [
      "https://dwvimages.sfo2.digitaloceanspaces.com/1653575241008_5438a4ae-2517-47ee-9512-90120209a1c2.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1653575250357_fc3a58b7-11b0-4376-888d-b79e46fa7b31.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1653575480607_c80495b9-9562-4e2e-bf84-be0222a0db2d.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1653575242534_b6114b23-bf9a-4b3f-bf71-f202ef7617df.jpg",
      "https://dwvimages.sfo2.digitaloceanspaces.com/1653575492763_bdc2e25f-4fd8-4280-b2fc-6116399109bc.jpg",
    ],
  },
];

export type Bairro = {
  slug: string;
  name: string;
  range: string;
  tag: string;
  big?: boolean;
  intro: string;
};

export const BAIRROS: Bairro[] = [
  {
    slug: "centro",
    name: "Centro",
    range: "R$ 18–35K/m²",
    tag: "Luxo & superluxo",
    big: true,
    intro:
      "O coração de Balneário Camboriú e um dos metros quadrados mais valorizados do Brasil. Concentra os edifícios mais altos da cidade, vida noturna, gastronomia e a orla mais movimentada.",
  },
  {
    slug: "barra-sul",
    name: "Barra Sul",
    range: "R$ 15–28K/m²",
    tag: "Luxo exclusivo",
    intro:
      "Bairro mais recente e exclusivo de BC, com empreendimentos assinados, praia mais tranquila e forte apelo para quem busca privacidade sem abrir mão do alto padrão.",
  },
  {
    slug: "pioneiros",
    name: "Pioneiros",
    range: "R$ 12–20K/m²",
    tag: "Alto padrão familiar",
    intro:
      "Perfil mais residencial e familiar, com condomínios fechados, escolas e comércio de bairro — procurado por quem quer alto padrão com rotina tranquila.",
  },
  {
    slug: "praia-do-estaleiro",
    name: "Praia do Estaleiro",
    range: "R$ 10–18K/m²",
    tag: "Luxo com natureza",
    intro:
      "Entre montanha e mar, mistura natureza preservada com empreendimentos de alto padrão — ideal para quem busca sossego sem se afastar do centro da cidade.",
  },
  {
    slug: "barra-norte",
    name: "Barra Norte",
    range: "R$ 8–15K/m²",
    tag: "Médio-alto padrão",
    intro:
      "Bairro em consolidação, com bom custo-benefício frente aos vizinhos mais valorizados e potencial de valorização nos próximos anos.",
  },
  {
    slug: "nacoes",
    name: "Nações",
    range: "R$ 7–12K/m²",
    tag: "Investimento",
    intro:
      "Um dos bairros com maior potencial de valorização de BC — porta de entrada mais acessível para quem quer investir na cidade.",
  },
];
