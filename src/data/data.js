const data = [
  {
    'key':14,
    'cityName':'Boise',
    'state':'ID',
    'ranking':1,
    'flags':732,
    'features':926,
    'totalArea':3930.74,
    'gridSize':30.71,
    'mapImage':'images/SOTM-92418-images/UID-300.jpeg',
    'headerImage':'images/headerImages/ID_Boise.jpg',
    'roadConnections':0.88,
    'roadRelation':0.0,
    'roadTag':0.12,
    'roundabout':0.0,
    'score':0.007509999999999999
  },
  {
    'key':3,
    'cityName':'Denver',
    'state':'CO',
    'ranking':2,
    'flags':2551,
    'features':4113,
    'totalArea':1188.12,
    'gridSize':4.64,
    'mapImage':'images/SOTM-92418-images/UCO-300.jpeg',
    'headerImage':'images/headerImages/CO_Denver.jpg',
    'roadConnections':0.85,
    'roadRelation':0.01,
    'roadTag':0.13,
    'roundabout':0.01,
    'score':0.008440000000000001
  },
  {
    'key':46,
    'cityName':'Madison',
    'state':'WI',
    'ranking':3,
    'flags':761,
    'features':1223,
    'totalArea':683.56,
    'gridSize':5.34,
    'mapImage':'images/SOTM-92418-images/UWI-300.jpeg',
    'headerImage':'images/seattle.jpg',
    'roadConnections':0.82,
    'roadRelation':0.0,
    'roadTag':0.18,
    'roundabout':0.0,
    'score':0.00855
  },
  {
    'key':2,
    'cityName':'Tucson',
    'state':'AZ',
    'ranking':4,
    'flags':586,
    'features':902,
    'totalArea':987.78,
    'gridSize':7.72,
    'mapImage':'images/SOTM-92418-images/UAZ-300.jpeg',
    'headerImage':'images/headerImages/AZ_tucson.jpg',
    'roadConnections':0.82,
    'roadRelation':0.03,
    'roadTag':0.12,
    'roundabout':0.03,
    'score':0.00878
  },
  {
    'key':27,
    'cityName':'Billings',
    'state':'MT',
    'ranking':5,
    'flags':148,
    'features':199,
    'totalArea':830.1,
    'gridSize':12.97,
    'mapImage':'images/SOTM-92418-images/UMT-300.jpeg',
    'headerImage':'images/headerImages/MT_Billings.jpg',
    'roadConnections':0.76,
    'roadRelation':0.0,
    'roadTag':0.24,
    'roundabout':0.0,
    'score':0.00926
  },
  {
    'key':6,
    'cityName':'Huntsville',
    'state':'AL',
    'ranking':6,
    'flags':568,
    'features':822,
    'totalArea':1807.48,
    'gridSize':28.24,
    'mapImage':'images/SOTM-92418-images/UAL-300.jpeg',
    'headerImage':'images/headerImages/AL_huntsville_AL.jpg',
    'roadConnections':0.86,
    'roadRelation':0.0,
    'roadTag':0.14,
    'roundabout':0.0,
    'score':0.00938
  },
  {
    'key':34,
    'cityName':'Las Vegas',
    'state':'NV',
    'ranking':7,
    'flags':1833,
    'features':2918,
    'totalArea':2240.42,
    'gridSize':8.75,
    'mapImage':'images/SOTM-92418-images/UNV-300.jpeg',
    'headerImage':'images/headerImages/NV_LV.jpg',
    'roadConnections':0.84,
    'roadRelation':0.01,
    'roadTag':0.14,
    'roundabout':0.01,
    'score':0.00946
  },
  {
    'key':49,
    'cityName':'Anchorage',
    'state':'AK',
    'ranking':8,
    'flags':228,
    'features':366,
    'totalArea':846.96,
    'gridSize':6.62,
    'mapImage':'images/SOTM-92418-images/UAK-300.jpeg',
    'headerImage':'images/headerImages/AK_Anchorage_AK.jpg',
    'roadConnections':0.7,
    'roadRelation':0.0,
    'roadTag':0.3,
    'roundabout':0.0,
    'score':0.01034
  },
  {
    'key':23,
    'cityName':'Detroit',
    'state':'MI',
    'ranking':9,
    'flags':2340,
    'features':3679,
    'totalArea':1879.38,
    'gridSize':7.34,
    'mapImage':'images/SOTM-92418-images/UMI-300.jpeg',
    'headerImage':'images/headerImages/MI_Detroit.jpg',
    'roadConnections':0.95,
    'roadRelation':0.0,
    'roadTag':0.05,
    'roundabout':0.0,
    'score':0.01075
  },
  {
    'key':48,
    'cityName':'Columbus',
    'state':'OH',
    'ranking':10,
    'flags':1918,
    'features':3026,
    'totalArea':2404.36,
    'gridSize':9.39,
    'mapImage':'images/SOTM-92418-images/UOH-300.jpeg',
    'headerImage':'images/headerImages/OH_Columbus.jpg',
    'roadConnections':0.87,
    'roadRelation':0.0,
    'roadTag':0.13,
    'roundabout':0.0,
    'score':0.01077
  },
  {
    'key':33,
    'cityName':'Albuquerque',
    'state':'NM',
    'ranking':11,
    'flags':789,
    'features':1204,
    'totalArea':720.48,
    'gridSize':5.63,
    'mapImage':'images/SOTM-92418-images/UNM-300.jpeg',
    'headerImage':'images/headerImages/NM_Alberquerque.jpg',
    'roadConnections':0.77,
    'roadRelation':0.0,
    'roadTag':0.23,
    'roundabout':0.0,
    'score':0.01126
  },
  {
    'key':36,
    'cityName':'Portland',
    'state':'OR',
    'ranking':12,
    'flags':1041,
    'features':1620,
    'totalArea':385.74,
    'gridSize':3.01,
    'mapImage':'images/SOTM-92418-images/UOR-300.jpeg',
    'headerImage':'images/headerImages/OR_Portland.jpg',
    'roadConnections':0.88,
    'roadRelation':0.0,
    'roadTag':0.12,
    'roundabout':0.0,
    'score':0.01127
  },
  {
    'key':25,
    'cityName':'Kansas City',
    'state':'MO',
    'ranking':13,
    'flags':2856,
    'features':4564,
    'totalArea':5248.76,
    'gridSize':20.5,
    'mapImage':'images/SOTM-92418-images/UMO-300.jpeg',
    'headerImage': 'images/headerImages/MO_KC.jpg',
    'roadConnections':0.88,
    'roadRelation':0.0,
    'roadTag':0.12,
    'roundabout':0.0,
    'score':0.01127
  },
  {
    'key':13,
    'cityName':'Des Moines',
    'state':'IA',
    'ranking':14,
    'flags':756,
    'features':1214,
    'totalArea':2455.54,
    'gridSize':19.18,
    'mapImage':'images/SOTM-92418-images/UIA-300.jpeg',
    'headerImage':'images/headerImages/IA_Desmoines.jpg',
    'roadConnections':0.89,
    'roadRelation':0.0,
    'roadTag':0.11,
    'roundabout':0.0,
    'score':0.011359999999999999
  },
  {
    'key':29,
    'cityName':'Fargo',
    'state':'ND',
    'ranking':15,
    'flags':465,
    'features':656,
    'totalArea':5087.38,
    'gridSize':79.49,
    'mapImage':'images/SOTM-92418-images/UND-300.jpeg',
    'headerImage':'images/headerImages/ND_Fargo.jpg',
    'roadConnections':0.68,
    'roadRelation':0.0,
    'roadTag':0.32,
    'roundabout':0.0,
    'score':0.01153
  },
  {
    'key':39,
    'cityName':'Columbia',
    'state':'SC',
    'ranking':16,
    'flags':797,
    'features':1403,
    'totalArea':2119.72,
    'gridSize':8.28,
    'mapImage':'images/SOTM-92418-images/USC-300.jpeg',
    'headerImage':'images/headerImages/SC_Columbia.jpg',
    'roadConnections':0.85,
    'roadRelation':0.0,
    'roadTag':0.15,
    'roundabout':0.0,
    'score':0.01225
  },
  {
    'key':5,
    'cityName':'Seattle',
    'state':'WA',
    'ranking':17,
    'flags':1656,
    'features':2906,
    'totalArea':646.9,
    'gridSize':2.53,
    'mapImage':'images/SOTM-92418-images/UWA-300.jpeg',
    'headerImage':'images/headerImages/WA_Seattle.jpg',
    'roadConnections':0.93,
    'roadRelation':0.01,
    'roadTag':0.05,
    'roundabout':0.01,
    'score':0.01258
  },
  {
    'key':30,
    'cityName':'Omaha',
    'state':'NE',
    'ranking':18,
    'flags':2036,
    'features':3016,
    'totalArea':7021.8,
    'gridSize':27.43,
    'mapImage':'images/SOTM-92418-images/UNE-300.jpeg',
    'headerImage':'images/headerImages/NE_Omaha.jpg',
    'roadConnections':0.74,
    'roadRelation':0.01,
    'roadTag':0.24,
    'roundabout':0.01,
    'score':0.01287
  },
  {
    'key':41,
    'cityName':'Memphis',
    'state':'TN',
    'ranking':19,
    'flags':1139,
    'features':1767,
    'totalArea':2937.54,
    'gridSize':11.47,
    'mapImage':'images/SOTM-92418-images/UTN-300.jpeg',
    'headerImage':'images/headerImages/TN_Memphis.jpg',
    'roadConnections':0.71,
    'roadRelation':0.0,
    'roadTag':0.29,
    'roundabout':0.0,
    'score':0.013040000000000001
  },
  {
    'key':35,
    'cityName':'Oklahoma City',
    'state':'OK',
    'ranking':20,
    'flags':1658,
    'features':2642,
    'totalArea':2368.86,
    'gridSize':9.25,
    'mapImage':'images/SOTM-92418-images/UOK-300.jpeg',
    'headerImage':'images/headerImages/OK_OklahomaCity.jpg',
    'roadConnections':0.9,
    'roadRelation':0.0,
    'roadTag':0.1,
    'roundabout':0.0,
    'score':0.013340000000000001
  },
  {
    'key':16,
    'cityName':'Indianapolis',
    'state':'IN',
    'ranking':21,
    'flags':2368,
    'features':3260,
    'totalArea':2030.02,
    'gridSize':7.93,
    'mapImage':'images/SOTM-92418-images/UIN-300.jpeg',
    'headerImage':'images/headerImages/IN_INdianapolis.jpg',
    'roadConnections':0.86,
    'roadRelation':0.03,
    'roadTag':0.08,
    'roundabout':0.03,
    'score':0.01335
  },
  {
    'key':40,
    'cityName':'Sioux Falls',
    'state':'SD',
    'ranking':22,
    'flags':338,
    'features':446,
    'totalArea':802.64,
    'gridSize':6.27,
    'mapImage':'images/SOTM-92418-images/USD-300.jpeg',
    'headerImage':'images/headerImages/SD_SiouxFalls.jpg',
    'roadConnections':0.72,
    'roadRelation':0.0,
    'roadTag':0.28,
    'roundabout':0.0,
    'score':0.0134
  },
  {
    'key':12,
    'cityName':'Atlanta',
    'state':'GA',
    'ranking':23,
    'flags':2420,
    'features':3929,
    'totalArea':1885.22,
    'gridSize':7.36,
    'mapImage':'images/SOTM-92418-images/UGA-300.jpeg',
    'headerImage':'images/headerImages/GA_Atlanta.jpg',
    'roadConnections':0.88,
    'roadRelation':0.03,
    'roadTag':0.06,
    'roundabout':0.03,
    'score':0.013680000000000001
  },
  {
    'key':44,
    'cityName':'Virginia Beach',
    'state':'VA',
    'ranking':24,
    'flags':1481,
    'features':2487,
    'totalArea':1415.54,
    'gridSize':5.53,
    'mapImage':'images/SOTM-92418-images/UVA-300.jpeg',
    'headerImage':'images/headerImages/VA_VirginiaBeach.jpg',
    'roadConnections':0.82,
    'roadRelation':0.0,
    'roadTag':0.18,
    'roundabout':0.0,
    'score':0.01377
  },
  {
    'key':43,
    'cityName':'Salt Lake City',
    'state':'UT',
    'ranking':25,
    'flags':1803,
    'features':2554,
    'totalArea':4193.88,
    'gridSize':16.38,
    'mapImage':'images/SOTM-92418-images/UUT-300.jpeg',
    'headerImage':'images/headerImages/UT_SLC.jpg',
    'roadConnections':0.85,
    'roadRelation':0.01,
    'roadTag':0.13,
    'roundabout':0.01,
    'score':0.01385
  },
  {
    'key':31,
    'cityName':'Manchester',
    'state':'NH',
    'ranking':26,
    'flags':362,
    'features':529,
    'totalArea':1199.28,
    'gridSize':18.74,
    'mapImage':'images/SOTM-92418-images/UNH-300.jpeg',
    'headerImage':'images/headerImages/NH_Manchester.jpg',
    'roadConnections':0.69,
    'roadRelation':0.11,
    'roadTag':0.09,
    'roundabout':0.11,
    'score':0.014230000000000001
  },
  {
    'key':11,
    'cityName':'Orlando',
    'state':'FL',
    'ranking':27,
    'flags':3428,
    'features':4835,
    'totalArea':3348.9,
    'gridSize':6.54,
    'mapImage':'images/SOTM-92418-images/UFL-300.jpeg',
    'headerImage':'images/headerImages/FL_Orlando.jpg',
    'roadConnections':0.9,
    'roadRelation':0.0,
    'roadTag':0.1,
    'roundabout':0.0,
    'score':0.01462
  },
  {
    'key':45,
    'cityName':'Burlington',
    'state':'VT',
    'ranking':28,
    'flags':326,
    'features':543,
    'totalArea':2076.66,
    'gridSize':32.45,
    'mapImage':'images/SOTM-92418-images/UVT-300.jpeg',
    'headerImage':'images/headerImages/VT_Burlington.jpg',
    'roadConnections':0.89,
    'roadRelation':0.0,
    'roadTag':0.11,
    'roundabout':0.0,
    'score':0.014669999999999999
  },
  {
    'key':28,
    'cityName':'Charlotte',
    'state':'NC',
    'ranking':29,
    'flags':1384,
    'features':2163,
    'totalArea':2055.98,
    'gridSize':8.03,
    'mapImage':'images/SOTM-92418-images/UNC-300.jpeg',
    'headerImage':'images/headerImages/NC_Charlotte.jpg',
    'roadConnections':0.81,
    'roadRelation':0.0,
    'roadTag':0.19,
    'roundabout':0.0,
    'score':0.01489
  },
  {
    'key':51,
    'cityName':'Cheyenne',
    'state':'WY',
    'ranking':30,
    'flags':173,
    'features':261,
    'totalArea':998.4,
    'gridSize':15.6,
    'mapImage':'images/SOTM-92418-images/UWY-300.jpeg',
    'headerImage':'images/headerImages/WY_Cheyenne.jpg',
    'roadConnections':0.7,
    'roadRelation':0.0,
    'roadTag':0.3,
    'roundabout':0.0,
    'score':0.015040000000000001
  },
  {
    'key':17,
    'cityName':'Wichita',
    'state':'KS',
    'ranking':31,
    'flags':721,
    'features':1091,
    'totalArea':1950.04,
    'gridSize':15.23,
    'mapImage':'images/SOTM-92418-images/UKS-300.jpeg',
    'headerImage':'images/headerImages/KS_Wichita.jpg',
    'roadConnections':0.73,
    'roadRelation':0.0,
    'roadTag':0.27,
    'roundabout':0.0,
    'score':0.0151
  },
  {
    'key':26,
    'cityName':'Jackson',
    'state':'MS',
    'ranking':32,
    'flags':616,
    'features':959,
    'totalArea':4599.64,
    'gridSize':71.87,
    'mapImage':'images/SOTM-92418-images/UMS-300.jpeg',
    'headerImage':'images/headerImages/MS_Jackson.jpg',
    'roadConnections':0.72,
    'roadRelation':0.0,
    'roadTag':0.28,
    'roundabout':0.0,
    'score':0.01546
  },
  {
    'key':24,
    'cityName':'Minneapolis',
    'state':'MN',
    'ranking':33,
    'flags':3928,
    'features':6133,
    'totalArea':3127.6,
    'gridSize':6.11,
    'mapImage':'images/SOTM-92418-images/UMN-300.jpeg',
    'headerImage':'images/headerImages/MN_Minneapolis.jpg',
    'roadConnections':0.78,
    'roadRelation':0.0,
    'roadTag':0.22,
    'roundabout':0.0,
    'score':0.01549
  },
  {
    'key':37,
    'cityName':'Philadelphia',
    'state':'PA',
    'ranking':34,
    'flags':1978,
    'features':3131,
    'totalArea':815.08,
    'gridSize':3.18,
    'mapImage':'images/SOTM-92418-images/UPA-300.jpeg',
    'headerImage':'images/headerImages/PA_philadelphia.jpg',
    'roadConnections':0.81,
    'roadRelation':0.01,
    'roadTag':0.17,
    'roundabout':0.01,
    'score':0.01583
  },
  {
    'key':22,
    'cityName':'Portland',
    'state':'ME',
    'ranking':35,
    'flags':560,
    'features':765,
    'totalArea':1667.8,
    'gridSize':13.03,
    'mapImage':'images/SOTM-92418-images/UME-300.jpeg',
    'headerImage':'images/headerImages/ME_Portland.jpg',
    'roadConnections':0.83,
    'roadRelation':0.0,
    'roadTag':0.17,
    'roundabout':0.0,
    'score':0.01697
  },
  {
    'key':38,
    'cityName':'Rhode Island',
    'state':'RI',
    'ranking':36,
    'flags':1467,
    'features':2358,
    'totalArea':5367.38,
    'gridSize':20.97,
    'mapImage':'images/SOTM-92418-images/URI-300.jpeg',
    'headerImage':'images/headerImages/RI_RI.jpg',
    'roadConnections':0.69,
    'roadRelation':0.0,
    'roadTag':0.31,
    'roundabout':0.0,
    'score':0.017269999999999997
  },
  {
    'key':47,
    'cityName':'Charleston',
    'state':'WV',
    'ranking':37,
    'flags':481,
    'features':772,
    'totalArea':2094.02,
    'gridSize':32.72,
    'mapImage':'images/SOTM-92418-images/UWV-300.jpeg',
    'headerImage':'images/headerImages/WV_Charleston.jpg',
    'roadConnections':0.9,
    'roadRelation':0.0,
    'roadTag':0.1,
    'roundabout':0.0,
    'score':0.01754
  },
  {
    'key':7,
    'cityName':'San Francisco',
    'state':'CA',
    'ranking':38,
    'flags':1206,
    'features':1950,
    'totalArea':840.64,
    'gridSize':3.28,
    'mapImage':'images/SOTM-92418-images/UCA-300.jpeg',
    'headerImage':'images/headerImages/CA_SF.jpg',
    'roadConnections':0.97,
    'roadRelation':0.0,
    'roadTag':0.03,
    'roundabout':0.0,
    'score':0.018009999999999998
  },
  {
    'key':1,
    'cityName':'Little Rock',
    'state':'AR',
    'ranking':39,
    'flags':853,
    'features':1255,
    'totalArea':1788.58,
    'gridSize':13.97,
    'mapImage':'images/SOTM-92418-images/UAR-300.jpeg',
    'headerImage':'images/headerImages/AR_LittleRock_AR.jpg',
    'roadConnections':0.77,
    'roadRelation':0.0,
    'roadTag':0.23,
    'roundabout':0.0,
    'score':0.018359999999999998
  },
  {
    'key':10,
    'cityName':'Wilmington',
    'state':'DE',
    'ranking':40,
    'flags':866,
    'features':1348,
    'totalArea':902.66,
    'gridSize':3.53,
    'mapImage':'images/SOTM-92418-images/UDE-300.jpeg',
    'headerImage':'images/seattle.jpg',
    'roadConnections':0.78,
    'roadRelation':0.0,
    'roadTag':0.22,
    'roundabout':0.0,
    'score':0.01867
  },
  {
    'key':15,
    'cityName':'Chicago',
    'state':'IL',
    'ranking':41,
    'flags':1546,
    'features':2510,
    'totalArea':347.3,
    'gridSize':1.36,
    'mapImage':'images/SOTM-92418-images/UIL-300.jpeg',
    'headerImage':'images/headerImages/IL_Chicago.jpg',
    'roadConnections':0.9,
    'roadRelation':0.03,
    'roadTag':0.04,
    'roundabout':0.03,
    'score':0.01906
  },
  {
    'key':21,
    'cityName':'Baltimore',
    'state':'MD',
    'ranking':42,
    'flags':1246,
    'features':2114,
    'totalArea':382.28,
    'gridSize':1.49,
    'mapImage':'images/SOTM-92418-images/UMD-300.jpeg',
    'headerImage':'images/headerImages/MD_Baltimore.jpg',
    'roadConnections':0.95,
    'roadRelation':0.0,
    'roadTag':0.05,
    'roundabout':0.0,
    'score':0.02029
  },
  {
    'key':19,
    'cityName':'New Orleans ',
    'state':'LA',
    'ranking':43,
    'flags':1513,
    'features':2264,
    'totalArea':8028.38,
    'gridSize':31.36,
    'mapImage':'images/SOTM-92418-images/ULA-300.jpeg',
    'headerImage':'images/headerImages/LA_NO.jpg',
    'roadConnections':0.8,
    'roadRelation':0.0,
    'roadTag':0.2,
    'roundabout':0.0,
    'score':0.0218
  },
  {
    'key':9,
    'cityName':'Washington',
    'state':'DC',
    'ranking':44,
    'flags':1089,
    'features':1814,
    'totalArea':499.08,
    'gridSize':1.95,
    'mapImage':'images/SOTM-92418-images/UDC-300.jpeg',
    'headerImage':'images/headerImages/DC_Washington.jpg',
    'roadConnections':0.9,
    'roadRelation':0.01,
    'roadTag':0.08,
    'roundabout':0.01,
    'score':0.02295
  },
  {
    'key':8,
    'cityName':'Hartford',
    'state':'CT',
    'ranking':45,
    'flags':1338,
    'features':2051,
    'totalArea':1011.44,
    'gridSize':3.95,
    'mapImage':'images/SOTM-92418-images/UCT-300.jpeg',
    'headerImage':'images/headerImages/CT_Hartford.jpg',
    'roadConnections':0.88,
    'roadRelation':0.0,
    'roadTag':0.12,
    'roundabout':0.0,
    'score':0.0251
  },
  {
    'key':18,
    'cityName':'Louisville',
    'state':'KY',
    'ranking':46,
    'flags':865,
    'features':1433,
    'totalArea':399.2,
    'gridSize':3.12,
    'mapImage':'images/SOTM-92418-images/UKY-300.jpeg',
    'headerImage':'images/headerImages/KY_Louisville.jpg',
    'roadConnections':0.89,
    'roadRelation':0.0,
    'roadTag':0.11,
    'roundabout':0.0,
    'score':0.02584
  },
  {
    'key':50,
    'cityName':'Honolulu',
    'state':'HI',
    'ranking':47,
    'flags':837,
    'features':1237,
    'totalArea':2258.24,
    'gridSize':17.64,
    'mapImage':'images/SOTM-92418-images/UHI-300.jpeg',
    'headerImage':'images/headerImages/HI_honolulu.jpg',
    'roadConnections':0.76,
    'roadRelation':0.0,
    'roadTag':0.24,
    'roundabout':0.0,
    'score':0.026660000000000003
  },
  {
    'key':42,
    'cityName':'Dallas',
    'state':'TX',
    'ranking':48,
    'flags':3324,
    'features':5320,
    'totalArea':1679.08,
    'gridSize':3.28,
    'mapImage':'images/SOTM-92418-images/UTX-300.jpeg',
    'headerImage':'images/headerImages/TX_Dallas.jpg',
    'roadConnections':0.92,
    'roadRelation':0.0,
    'roadTag':0.08,
    'roundabout':0.0,
    'score':0.02835
  },
  {
    'key':20,
    'cityName':'Boston',
    'state':'MA',
    'ranking':49,
    'flags':1575,
    'features':2580,
    'totalArea':246.68,
    'gridSize':0.96,
    'mapImage':'images/SOTM-92418-images/UMA-300.jpeg',
    'headerImage':'images/headerImages/MA_Boston.jpg',
    'roadConnections':0.93,
    'roadRelation':0.0,
    'roadTag':0.07,
    'roundabout':0.0,
    'score':0.03615
  },
  {
    'key':4,
    'cityName':'New York',
    'state':'NY',
    'ranking':50,
    'flags':979,
    'features':1688,
    'totalArea':272.54,
    'gridSize':1.06,
    'mapImage':'images/SOTM-92418-images/UNY-300.jpeg',
    'headerImage':'images/headerImages/NY_NY.jpg',
    'roadConnections':0.94,
    'roadRelation':0.0,
    'roadTag':0.06,
    'roundabout':0.0,
    'score':0.04261
  },
  {
    'key':32,
    'cityName':'Newark',
    'state':'NJ',
    'ranking':51,
    'flags':1126,
    'features':1924,
    'totalArea':288.54,
    'gridSize':1.13,
    'mapImage':'images/SOTM-92418-images/UNJ-300.jpeg',
    'headerImage':'images/headerImages/NJ_Newark.jpg',
    'roadConnections':0.81,
    'roadRelation':0.0,
    'roadTag':0.19,
    'roundabout':0.0,
    'score':0.047580000000000004
  }
]

export default data;