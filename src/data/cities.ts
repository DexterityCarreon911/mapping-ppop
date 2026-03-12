export interface City {
  id: string;
  name: string;
  lat: number;
  lng: number;
  culture: string;
  food: string;
  festivals: string;
  tech: string;
}

export const cities: City[] = [
  {
    id: 'new-york',
    name: 'New York',
    lat: 40.7128,
    lng: -74.0060,
    culture: 'The global capital of culture and finance. Home to Broadway theater district, world-renowned museums (MoMA, Met, Natural History), iconic neighborhoods like Greenwich Village and Chinatown, and immigrant communities from every corner of the world. Center of media, fashion, and arts.',
    food: 'Iconic NY pizza, hand-rolled bagels with lox, pastrami on rye, Jewish deli culture, Michelin-star fine dining, diverse ethnic cuisines including Italian, Chinese, Korean, Indian, French, Spanish, and Middle Eastern street food.',
    festivals: 'Times Square New Year Celebration, NYC Pride Parade, Tribeca Film Festival, New York Fashion Week, Metropolitan Opera, Carnegie Hall performances, Macy\'s Thanksgiving Day Parade',
    tech: 'Major fintech ecosystem ($70B+), venture capital hub, tech startups in Flatiron district, cryptocurrency exchanges, digital media companies, AI research labs, e-commerce innovation'
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    lat: 34.0522,
    lng: -118.2437,
    culture: 'Entertainment and media capital of the world. Hollywood film industry, music production, diverse neighborhoods (Los Feliz, Silver Lake, Long Beach), street art, modern art scene, beach culture, car culture, and entertainment technology.',
    food: 'Authentic LA tacos, Korean BBQ, Persian cuisine, farm-to-table, vegan and health-conscious dining, Mexican street food, In-N-Out burger, ramen culture, gastropubs, diverse Asian fusion.',
    festivals: 'Coachella, LACMA Lights, Los Angeles International Film Festival, Grammy Awards, Hollywood Bowl concerts, Sunset Strip Music Festival, LA Art Show, Outside Lands LA',
    tech: 'Entertainment tech companies, visual effects and CGI studios, gaming industry (Epic Games, Rockstar Games), aerospace tech, Hollywood AI applications, digital content creation, music production software'
  },
  {
    id: 'chicago',
    name: 'Chicago',
    lat: 41.8781,
    lng: -87.6298,
    culture: 'Architectural marvel of America, birthplace of jazz and blues music, home to pioneering modernist architecture (Frank Lloyd Wright). Iconic neighborhoods (Old Town, Wicker Park), world-class museums, deep culinary traditions, and strong community pride.',
    food: 'Deep-dish pizza perfected, Chicago-style hot dogs with mustard and vegetables, Italian beef sandwiches, ribs, Garrett popcorn, fine dining scene, steakhouses, soul food, and diverse immigrant cuisines including Polish, Mexican, and Thai.',
    festivals: 'Chicago Jazz Festival, Lollapalooza, Taste of Chicago, Chicago International Film Festival, Chicago Blues Festival, New Year\'s Eve celebrations, Ribfest, Chicago Gourmet',
    tech: 'Enterprise software companies, digital marketing hub, trading platforms and financial tech, Big Data analytics, Northwestern and University of Chicago research, cloud technology, and fintech innovation'
  },
  {
    id: 'houston',
    name: 'Houston',
    lat: 29.7604,
    lng: -95.3698,
    culture: 'Texas\'s multicultural powerhouse with massive Vietnamese, Indian, Latino, and African American communities. Museum of Fine Arts, Theater District, Space Center Houston celebrating NASA heritage. Dynamic food scene and emerging art galleries representing diverse cultures.',
    food: 'Tex-Mex and authentic Mexican cuisine, pho and Vietnamese street food, Indian curries, BBQ brisket, crawfish boils, Cajun cuisine, Filipino, Chinese, and Middle Eastern food. Growing farm-to-table scene with Texas ingredients.',
    festivals: 'Houston Livestock Show and Rodeo, Art Car Parade (unique art vehicles), Houston Pride Festival, Bayou City Art Festival, Houston Restaurant Weeks, Bleu Fest, Vietnamese New Year celebrations',
    tech: 'Energy sector technology (oil & gas optimization), aerospace and robotics, medical device innovation, healthcare IT, NASA Johnson Space Center collaborations, renewable energy tech, and petrochemical software'
  },
  {
    id: 'miami',
    name: 'Miami',
    lat: 25.7617,
    lng: -80.1918,
    culture: 'Gateway to Latin America and the Caribbean. Cuban heritage dominates Wynwood and Little Havana with murals and galleries. Art Deco architecture, vibrant nightlife, tropical beach culture, Latin music and dance, and multicultural diversity celebrated throughout.',
    food: 'Cuban sandwiches, ropa vieja, medianoche, Caribbean jerk, ceviche, fresh tropical fruits, cafecito culture, Venezuelan arepas, Brazilian churrasco, Latin American street food, and Caribbean seafood.',
    festivals: 'Ultra Music Festival, Art Basel Miami Beach, Miami Carnival, Wynwood Walls street art festival, Viernes Culturales (cultural Friday nights), Art Miami fair, Latin Grammy Awards, Cuban Heritage Festival',
    tech: 'Fintech hub for Latin American companies, cryptocurrency exchanges and blockchain startups, music production tech, entertainment software, digital media companies, machine vision for Latin markets, and LatAm innovation hub'
  },
  {
    id: 'seattle',
    name: 'Seattle',
    lat: 47.6062,
    lng: -122.3321,
    culture: 'Grunge music capital of the world (Nirvana, Pearl Jam, Sound Garden), tech innovation hub, coffee culture epicenter, nature-focused lifestyle with mountains and water everywhere. Pike Place Market iconic public market, emerging music and tech scenes, and outdoor recreation culture.',
    food: 'Fresh Pacific seafood (salmon, halibut), coffee perfection, craft beer culture, Asian fusion and ramen, farm-to-table with local produce, vegan and vegetarian options, donut culture, and Pacific Northwest cuisine.',
    festivals: 'Seattle International Film Festival, Capitol Hill Block Party (music and culture festival), Seafair (summer festival), Bumbershoot music festival, Seattle Art Fair, Pike Place Market events, and numerous music venue shows',
    tech: 'Tech giant headquarters (Amazon, Microsoft nearby), gaming industry (Valve, Bungie), biotechnology and life sciences, aerospace suppliers, cloud computing innovation, and coffee tech (smart devices)'
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    lat: 37.7749,
    lng: -122.4194,
    culture: 'Innovation and counterculture capital, Summer of Love heritage, LGBTQ+ rights movement birthplace, diverse neighborhoods (Mission, Castro, Haight-Ashbury), cutting-edge art galleries, and scenic views with Golden Gate Bridge.',
    food: 'Farm-to-table cuisine at its finest, Asian fusion (Japanese, Vietnamese, Korean, Chinese), Mission District burritos, fresh seafood and Dungeness crab, sourdough bread culture, Michelin-star fine dining, and diverse ethnic neighborhoods.',
    festivals: 'Outside Lands (massive music festival), San Francisco Pride (largest in US), Stern Grove Festival, SXSW, San Francisco Jazz Heritage Festival, Chinese New Year Parade, and numerous tech conferences',
    tech: 'Silicon Valley adjacent venture capital hub, AI and machine learning innovation, startups in SoMa district, biotech and life sciences, clean energy, robotics, and the center of global tech innovation'
  },
  {
    id: 'washington-dc',
    name: 'Washington DC',
    lat: 38.9072,
    lng: -77.0369,
    culture: 'Nation\'s capital with 250+ years of history. World-class free museums (Smithsonian), iconic monuments, government heritage, diverse neighborhoods (U Street Corridor, Logan Circle), and emerging creative communities.',
    food: 'Soul food and African American culinary heritage, diverse international ambassadorial cuisine, Ethiopian food, half-smoke sandwiches, crab and seafood, dessert culture, craft beverage scene, and farm-to-table emphasis.',
    festivals: 'National Cherry Blossom Festival, Independence Day fireworks on National Mall, DC Food Festival, Smithsonian Folklife Festival, Kennedy Center performances, Light City (art festival), and numerous cultural celebrations',
    tech: 'Government tech contracts and cybersecurity firms, policy tech companies, nonprofit tech sector, federal IT infrastructure, emerging startup scene in neighborhoods like Woodley Park, and data analytics innovation'
  },
  {
    id: 'boston',
    name: 'Boston',
    lat: 42.3601,
    lng: -71.0589,
    culture: 'American Revolution birthplace with colonial history dating back to 1630. Academic excellence hub (Harvard, MIT, Boston University), sports culture obsessed, historic Beacon Hill and North End neighborhoods, and strong Irish American heritage.',
    food: 'New England clam chowder, lobster rolls and fresh lobster, Italian North End cuisine, Dunkin\' coffee culture, craft beer, oysters, Boston cream pie, Irish pubs, seafood traditions, and Michelin-star fine dining.',
    festivals: 'Boston Pops Orchestra concerts, Head of the Charles Regatta, Boston Wine Festival, St. Patrick\'s Day Parade, Boston International Film Festival, First Night, and numerous sports celebrations',
    tech: 'Biotech cluster and pharmaceutical innovation, venture capital investment, MIT and Harvard research and innovation, healthcare tech, robotics, AI research, and life sciences excellence'
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas',
    lat: 36.1699,
    lng: -115.1398,
    culture: 'Entertainment capital of the world with casino culture, world-class performances and shows, nightlife and clubbing, Rat Pack heritage, neon art and design, and leisure-focused lifestyle on the famous Las Vegas Strip.',
    food: 'Luxurious buffet dining, steakhouses and fine dining, celebrity chef restaurants, diverse international cuisines, casual sports bar food, fountain shows with dining experiences, craft cocktails, and 24-hour food culture.',
    festivals: 'CES (Consumer Electronics Show - largest tech conference in US), Electronic Daisy Carnival (EDC - massive music festival), Las Vegas Valley Food Festival, NAB Show, Zombie Burlesque, and continuous live entertainment',
    tech: 'Gaming technology and casino software, AI and machine learning for gaming, blockchain and cryptocurrency conferences, hospitality tech solutions, entertainment systems, virtual reality applications, and electronic commerce innovation'
  },
  {
    id: 'austin',
    name: 'Austin',
    lat: 30.2672,
    lng: -97.7431,
    culture: 'Live music capital of the world with vibrant music venues on every street (6th Street, Red River Cultural District). Tech-forward innovation hub with creative culture. Quirky, fun-loving culture with "Keep Austin Weird" motto. Diverse food trucks and creative neighborhoods.',
    food: 'Texas BBQ brisket and ribs (Franklin Barbecue and trailers), food truck paradise with tacos and international cuisine, breakfast tacos obsession, Korean BBQ, Indian cuisine, farm-to-table restaurants, craft beer, and innovative fusion dining.',
    festivals: 'South by Southwest (SXSW - major film, interactive media, and music festival), Austin City Limits (massive music festival), Texas Book Festival, Austin Jazz Festival, Formula 1 Grand Prix, and continuous live music venues',
    tech: 'Tech startup epicenter (Apple, Google, Tesla, Oracle offices), software development, video game studios, AI and cybersecurity companies, digital media startups, venture capital, and innovation acceleration programs'
  },
  {
    id: 'denver',
    name: 'Denver',
    lat: 39.7392,
    lng: -104.9903,
    culture: 'Rocky Mountain city with outdoor recreation culture, craft beer capital of America, arts scene (Denver Art Museum), music venues, microbreweries as cultural institutions, and outdoor adventure lifestyle at 5,280 feet elevation.',
    food: 'Craft beer culture paired with food, Rocky Mountain oysters, Southwestern cuisine, green chili obsession, farm-to-table with local ingredients, food truck scene, Mexican heritage cuisine, and ski town dining traditions.',
    festivals: 'Great American Beer Festival (largest beer competition), Denver International Film Festival, Cinco de Mayo celebrations, Cherry Creek Arts Festival, Blues Fest, and outdoor summer concert series',
    tech: 'Aerospace and defense contractors, renewable energy companies, IT consulting firms, biotechnology, outdoor recreation tech, drone innovation, and growing startup ecosystem with venture capital'
  },
  {
    id: 'portand-oregon',
    name: 'Portland',
    lat: 45.5152,
    lng: -122.6784,
    culture: 'Quirky Pacific Northwest city with eccentric neighborhoods, food cart culture, indie bookstores (Powell\'s Books), craft beer and coffee passion, environmental consciousness, street art and murals, and weird independent spirit.',
    food: 'Food cart pod culture with diverse global cuisines, craft beer and coffee shops on every corner, vegan and vegetarian cuisine, farm-to-table with local Oregon produce, ramen, Vietnamese food, donuts, and artisanal food movement.',
    festivals: 'Portland International Film Festival, North American Organic Brewers Fest, Portland Beer & Food Festival, PDX Pop Now! (indie music festival), Picklepalooza, and numerous street fairs and music venues',
    tech: 'Semiconductor manufacturing (Intel nearby), software development, web services, open source software communities, clean tech and sustainability companies, and digital media startups'
  },
  {
    id: 'philadelphia',
    name: 'Philadelphia',
    lat: 39.9526,
    lng: -75.1652,
    culture: 'American Revolution birthplace (Liberty Bell, Independence Hall), historic neighborhoods with colonial architecture, strong sports culture, Italian Market authentic traditions, diverse immigrant communities, and emerging arts scene.',
    food: 'Iconic Philly cheesesteak sandwiches, soft pretzels and street food, Italian Market cuisine and Italian restaurants, Reading Terminal Market historic public market, soul food, Vietnamese restaurants, craft beer, and diverse ethnic neighborhoods.',
    festivals: 'Philadelphia Museum of Art, Mummers Day Parade (historic New Year\'s parade), Benjamin Franklin Festival, Philadelphia Film Festival, South Street Seaport Festival, and numerous neighborhood street fairs',
    tech: 'Healthcare IT and medical device technology, pharmaceutical companies, financial services tech, university research (Penn, Drexel), robotics, and life sciences innovation'
  },
  {
    id: 'nashville',
    name: 'Nashville',
    lat: 36.1627,
    lng: -86.7816,
    culture: 'Music City USA - country music capital with Grand Ole Opry and honky-tonks on Broadway. Live music on every corner, recording studios, songwriter culture, Southern charm, and emerging food and tech scenes alongside music heritage.',
    food: 'Hot chicken (Nashville\'s unique spicy fried chicken tradition), soul food, Southern comfort food, BBQ and smoked meats, fish and chips at fish camps, diverse international cuisine growing, and craft cocktails with Southern ingredients.',
    festivals: 'County Music Association (CMA) Awards, Bonnaroo music festival (nearby), GoFest International Music Festival, CMA Fest, Nashville Beer and Food Festival, and continuous live music on Broadway streets',
    tech: 'Music production technology, healthcare IT innovation (major med-tech hub), fintech companies, recording studio tech, digital media, and growing startup scene in emerging neighborhoods'
  },
  {
    id: 'new-orleans',
    name: 'New Orleans',
    lat: 29.9511,
    lng: -90.2723,
    culture: 'Jazz birthplace with unparalleled music heritage, French and Spanish colonial architecture, Mardi Gras and carnival culture, Creole and Cajun traditions, vibrant neighborhoods (French Quarter, Marigny, Bywater), and unique cultural fusion.',
    food: 'Jazz-influenced creole and Cajun cuisine, po\'boy sandwiches, gumbo and jambalaya, crawfish boils, beignets and chicory coffee, fresh Gulf seafood, street food culture, red beans and rice, and diverse Caribbean influences.',
    festivals: 'Mardi Gras (massive carnival celebration), New Orleans Jazz Fest, French Quarter Festival, Essence Fest, Southern Food & Beverage Museum, Voodoo Fest (music), and continuous live music venues',
    tech: 'Oil and gas technology, maritime tech, music and media technology, cultural heritage tech documentation, tourism tech platforms, and emerging startup ecosystem'
  },
  {
    id: 'atlanta',
    name: 'Atlanta',
    lat: 33.7490,
    lng: -84.3880,
    culture: 'Modern Southern city and capital of the New South, African American cultural center (MLK heritage), hip-hop and music culture (OutKast, T.I., Future), diverse international communities, historic Auburn Avenue, emerging tech culture.',
    food: 'Soul food and African American cuisine heritage, Fried chicken (Gus\'s, etc.), ribs and BBQ, Southern comfort food, diverse world cuisines reflecting immigrant communities, Vietnamese and Asian food, Latin American, and craft beer culture.',
    festivals: 'Atlanta Film Festival, BronzeLens Film Festival, A3C Hip Hop Festival, Atlanta Jazz Festival, Juneteenth celebrations, Dragon Con (pop culture convention), and music venue shows',
    tech: 'Tech companies and startups (Delta, NCR tech divisions), software development, IT consulting, fintech hub, data analytics, digital media companies, and growing venture capital scene'
  },
  {
    id: 'minneapolis',
    name: 'Minneapolis',
    lat: 44.9778,
    lng: -93.2650,
    culture: 'Music heritage (Prince\'s Paisley Park, Prince\'s First Avenue clubs), independent music scene, theater culture, Scandinavian heritage, Mall of America nearby, distinctive neighborhoods, and progressive community values.',
    food: 'Scandinavian traditions (meatballs, herring), farm-to-table restaurants with regional ingredients, Somali food in East African community, Vietnamese cuisine, craft beer, hot dish (local casserole), and diverse ethnic food trucks.',
    festivals: 'Minnesota State Fair, Minneapolis International Film Festival, First Avenue music performances, Uptown Summer Film Festival, Minnesota Fringe Festival, and numerous neighborhood street fairs',
    tech: 'IT and business technology companies, medical device companies, manufacturing tech, software development, healthcare IT, emerging startup ecosystem, and tech consulting firms'
  },
  {
    id: 'charlotte',
    name: 'Charlotte',
    lat: 35.2271,
    lng: -80.8431,
    culture: 'Booming New South city, second-largest banking center in US, growing tech scene and sports culture (Panthers, Hornets), diverse neighborhoods with emerging arts districts, and rapid modernization with Southern hospitality.',
    food: 'Southern comfort food, BBQ traditions (vinegar-based Carolina style), soul food restaurants, diverse international cuisines reflecting growing immigrant communities, craft breweries, steakhouses, and Southern-influenced fine dining.',
    festivals: 'Charlotte Film Festival, Carolina Renaissance Festival, Festival in the Park (summer arts), Beer City Festival, Latin American festivals, Caribbean celebrations, and sports fan culture around arenas',
    tech: 'Banking and financial services technology, tech startups in South End, healthcare IT, manufacturing tech, software development, data analytics, and growing venture capital investment'
  },
  {
    id: 'san-diego',
    name: 'San Diego',
    lat: 32.7157,
    lng: -117.1611,
    culture: 'Sunny Southern California beach city with Mexican border culture influence, military heritage, Balboa Park museums, craft beer capital, diverse neighborhoods, and year-round outdoor recreation lifestyle.',
    food: 'Fish tacos and authentic Mexican street food, fresh seafood and sushi, Californio cuisine, craft beer, Thai and Vietnamese restaurants, international food parks, farm-to-table with local produce, and Latin American specialties.',
    festivals: 'San Diego Comic-Con (pop culture phenomenon), Balboa Park events, San Diego International Film Festival, Street Fest food and culture, Craft Beer Week, Latin American Heritage Festival, and numerous beach celebrations',
    tech: 'Biotechnology hub (life sciences research), military and aerospace tech, software companies, internet companies, medical devices, telecommunications, and emerging startup ecosystem'
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    lat: 33.4484,
    lng: -112.0742,
    culture: 'Desert city with Native American heritage (multiple tribes nearby), rapidly growing cultural scene, Phoenix Art Museum and galleries, outdoor recreation culture, diverse neighborhoods, and suburban sprawl with urban revitalization.',
    food: 'Authentic Mexican cuisine and Sonoran hot dogs, Southwest and Southwestern cuisine, Native American frybread and traditional foods, BBQ, diverse international options, farm-to-table with local ingredients, and craft beer culture.',
    festivals: 'Phoenix Art Museum events, Heard Museum Native American art festivals, Phoenix Pride Festival, Chambers Music Festival, Spring Training baseball season, Arizona Exposition and State Fair, and various cultural celebrations',
    tech: 'Semiconductor and microchip manufacturing, aerospace and defense tech, software companies moving to region, renewable energy tech (solar), data centers, and growing startup ecosystem'
  },
  {
    id: 'detroit',
    name: 'Detroit',
    lat: 42.3314,
    lng: -83.0458,
    culture: 'Motown music birthplace with legendary sound and recording history, automotive manufacturing heritage, African American cultural center, emerging arts and music revival, historic architecture, and resilience narrative.',
    food: 'Coney Island hot dogs (Detroit signature), Transmitter sandwiches, soul food heritage, Middle Eastern cuisine (large Lebanese community), American comfort food, BBQ, diverse immigrant cuisines, and craft beer renaissance.',
    festivals: 'Movement Electronic Music Festival, Detroit Jazz Festival, Mustang Roundup car culture, Filmfest Detroit (Detroit Film Festival), Made in Detroit Festival, Taste of Detroit, and numerous neighborhood festivals and music venues',
    tech: 'Automotive tech and electric vehicle development, software for vehicles, manufacturing and robotics technology, artificial intelligence for transportation, emerging tech startup scene, and digital media companies'
  },
  {
    id: 'pittsburgh',
    name: 'Pittsburgh',
    lat: 40.4406,
    lng: -79.9959,
    culture: 'Steel city with industrial heritage and modern revitalization story, university cities (Pitt, Carnegie Mellon), robotics and AI innovation, emerging arts and music scene, historic neighborhoods with strong community ties, and bridges iconic landmark.',
    food: 'Pierogies (Eastern European/Polish heritage), Primanti Bros. sandwiches with fries, chipped ham (unique lunch meat), BBQ and ribs, diverse Eastern European cuisine, craft beer, and diverse international food reflecting immigrant communities.',
    festivals: 'Three Rivers Arts Festival, Pittsburgh International Film Festival, KeyBank Pittsburgh Marathon, Pittsburgh Jazz Festival, Thrival music and wellness festival, and music venue performances',
    tech: 'Robotics innovation (Carnegie Mellon), AI and machine learning research, autonomous vehicle development, medical technology, software development, healthcare tech, and growing startup ecosystem focused on autonomy'
  },
  {
    id: 'salt-lake-city',
    name: 'Salt Lake City',
    lat: 40.7608,
    lng: -111.8910,
    culture: 'Mountain city near world-class skiing, Mormon heritage and LDS Church influence, Winter Olympics legacy (2002), outdoor recreation culture, growing tech scene, diverse neighborhoods mixing traditional and progressive communities.',
    food: 'Fry sauce on fries (local condiment), funeral potatoes (casserole), scones buffet tradition, Utah barbecue, diverse international cuisines reflecting growing immigrants (large Pacific Islander community), craft beer, and farm-to-table.',
    festivals: 'Sundance Film Festival (major film festival nearby), Bonneville Salt Flats racing, Utah arts and music festivals, Park City Film Festival, Winter sports events, and various cultural celebrations',
    tech: 'Software companies and startups, fintech and cryptocurrency development (Overstock.com), medical technology, outdoor recreation tech, aerospace companies, and growing venture capital investment in tech sector'
  },
  {
    id: 'buffalo',
    name: 'Buffalo',
    lat: 42.8864,
    lng: -78.8784,
    culture: "Historic Great Lakes city with industrial heritage, Niagara Falls nearby, Buffalo wings food culture iconic, emerging arts and revitalization efforts, diverse neighborhoods, and Rust Belt resilience stories.",
    food: "Buffalo wings (spicy chicken wing invention), beef on wecks sandwiches, fish fries Friday tradition, Niagara Falls international cuisine, diverse ethnic communities (Polish, Italian, Irish, Puerto Rican), craft beer, and waterfront dining.",
    festivals: "Niagara Falls tourist attractions, Buffalo News Hunger for the Holidays food festival, Buffalo Film Festival, Canalside outdoor summer events, neighborhood street fairs, and beer and food celebrations",
    tech: "Manufacturing and industrial tech, renewable energy (Niagara Falls hydroelectric), software development, medical technology, and revitalization tech startups"
  },
  {
    id: 'cincinnati',
    name: 'Cincinnati',
    lat: 39.1582,
    lng: -84.4555,
    culture: 'Ohio River city with strong German heritage, thriving music and performing arts scene, emerging tech scene (Over the Rhine neighborhood revitalization), sports culture (Bengals, Reds), historic architecture, and community pride.',
    food: 'Cincinnati chili (unique local Greek-influenced chili), Skyline Chili signature dish, German traditions and beer brewing heritage, pork and meat specialties, soul food, Vietnamese cuisine, diverse immigrants cuisines, and craft beer.',
    festivals: 'Cincinnati Music Festival, Rock on the Edge festival, Taste of Cincinnati, May Festival music performances, Cincinnati International Film Festival, and Over the Rhine neighborhood summer events',
    tech: 'Manufacturing and industrial automation, medical devices and pharmaceutical tech, software development, e-commerce companies, and emerging startup ecosystem in historic neighborhoods'
  },
  {
    id: 'columbus',
    name: 'Columbus',
    lat: 39.9612,
    lng: -82.9988,
    culture: 'Fast-growing Midwest city with Ohio State University culture, emerging tech startup hub (startup capital status), diverse immigrant communities, arts scene development, music venues, and vibrant neighborhood culture.',
    food: 'Diverse international cuisines from immigrant communities, German traditions, sports bar food culture, taco trucks and Mexican food, Ethiopian cuisine, Vietnamese pho, craft beer renaissance, and farm-to-table restaurants.',
    festivals: 'Columbus International Film Festival, Comfest (community festival), Red White and Boom (Independence Day), North Market local farm festival, numerous neighborhood festivals, and music venue performances',
    tech: 'Tech startup ecosystem, software development companies, insurance company headquarters tech divisions, medical technology, IT services, venture capital for startups, and innovation districts'
  },
  {
    id: 'memphis',
    name: 'Memphis',
    lat: 35.1495,
    lng: -90.0490,
    culture: 'Music birthplace of blues, soul, and rock and roll (Graceland, Beale Street, Stax Records), Mississippi River city with African American cultural heritage, soulful music venues, historic cotton trading, and cultural renaissance.',
    food: 'Ribs and BBQ (world-famous Memphis style), soul food heritage, fried catfish and fish camp traditions, hot dogs and comfort food, blues-themed restaurants on Beale Street, Southern cuisine, and growing food truck scene.',
    festivals: 'Memphis in May (massive month-long festival), Beale Street Music Festival, Blues Music Awards, Music Month celebrations, South Memphis food scene, and continuous live music venues on Beale Street',
    tech: 'Logistics and supply chain technology (FedEx headquartered in nearby suburbs), healthcare IT, music production and recording tech, media companies, and emerging startup ecosystem'
  },
  {
    id: 'louisville',
    name: 'Louisville',
    lat: 38.2527,
    lng: -85.7585,
    culture: 'Kentucky\'s largest city famous for horse racing (Kentucky Derby), bourbon and whiskey heritage, Muhammad Ali birthplace, emerging food and music scene, diverse neighborhoods, and Southern hospitality culture.',
    food: 'Hot brown sandwich (open-faced turkey), bourbon barrel-aged everything, fried chicken Southern tradition, Burgoo (stew), bourbon distillery tours and tastings, diverse ethnic restaurants, BBQ, and craft beer culture.',
    festivals: 'Kentucky Derby (horse racing spectacle), Bourbon Fest (spirits celebration), Waterfront Blues Festival, Galentine\'s music festival, Corn Island Storytelling Festival, and various bourbon and food events',
    tech: 'Bourbon and spirits tech (production and E-commerce), logistics and distribution tech, healthcare technology, automotive supplier tech, and emerging startup community'
  },
  {
    id: 'kansas-city',
    name: 'Kansas City',
    lat: 39.0997,
    lng: -94.5786,
    culture: 'Jazz heritage city on Missouri-Kansas border, BBQ culture capital, River Market historic district, musical venues and nightlife, fountains throughout city, sports culture (Chiefs, Royals), and diverse neighborhoods revealing hidden gems.',
    food: 'Kansas City BBQ style (thick, sweet sauce, burnt ends specialty), jazz-themed restaurants, diverse ethnic cuisines, steakhouses, Country Club Plaza fine dining, fried chicken, fish and chips, craft beer, and food truck culture.',
    festivals: 'Kansas City Jazz Festival, Blues Festival, American Royal Barbecue Competition (massive BBQ event), Salsa Festival, Kansas City Film Festival, River Market concerts, and continuous jazz venue performances',
    tech: 'Tech companies and startups, software development, IT consulting, telecommunications, healthcare technology, logistics, and venture capital investment in growing tech ecosystem'
  }
];
