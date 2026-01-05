// ============================================
// COMPREHENSIVE WORLD FLAGS DATABASE
// 240+ Countries and Territories with History
// ============================================

const COUNTRIES = [
    // A
    { code: "af", name: "Afghanistan", capital: "Kabul", continent: "Asia", history: "A landlocked nation at the crossroads of Central and South Asia, Afghanistan has been a key point along the ancient Silk Road. Often called the 'Graveyard of Empires,' it has resisted conquest by many powers throughout history." },
    { code: "al", name: "Albania", capital: "Tirana", continent: "Europe", history: "A small Balkan nation that declared independence from the Ottoman Empire in 1912. The double-headed eagle on its flag honors the 15th-century hero Skanderbeg who defended the country against Ottoman invasion." },
    { code: "dz", name: "Algeria", capital: "Algiers", continent: "Africa", history: "The largest country in Africa, Algeria was a French colony for over 130 years until it won independence in 1962 after a brutal war. It possesses vast oil and natural gas reserves in the Sahara Desert." },
    { code: "as", name: "American Samoa", capital: "Pago Pago", continent: "Oceania", history: "A U.S. territory in the South Pacific where Polynesian culture has thrived for over 3,000 years. Its residents are U.S. nationals who maintain strong traditional Samoan customs and way of life." },
    { code: "ad", name: "Andorra", capital: "Andorra la Vella", continent: "Europe", history: "A tiny principality nestled in the Pyrenees mountains between France and Spain. Established in 1278, it is one of the world's oldest nations and is known for its ski resorts and duty-free shopping." },
    { code: "ao", name: "Angola", capital: "Luanda", continent: "Africa", history: "A former Portuguese colony that gained independence in 1975, followed by a devastating civil war that lasted until 2002. Today it is Africa's second-largest oil producer and is rebuilding its economy." },
    { code: "ai", name: "Anguilla", capital: "The Valley", continent: "North America", history: "A British Overseas Territory in the Caribbean known for its stunning beaches and coral reefs. In 1967, it famously rebelled against a forced federation with St. Kitts and Nevis." },
    { code: "aq", name: "Antarctica", capital: "None", continent: "Antarctica", history: "Earth's southernmost continent, discovered in 1820 and governed by the Antarctic Treaty of 1959. It is dedicated to peaceful scientific research and has no permanent human population." },
    { code: "ag", name: "Antigua and Barbuda", capital: "St. John's", continent: "North America", history: "A twin-island Caribbean nation that gained independence from Britain in 1981. Christopher Columbus named Antigua in 1493, and the country is famous for having 365 beaches—one for each day of the year." },
    { code: "ar", name: "Argentina", capital: "Buenos Aires", continent: "South America", history: "The second-largest country in South America, Argentina declared independence from Spain in 1816. It is the birthplace of tango, home to the gaucho cowboy culture, and named after the Latin word for silver." },
    { code: "am", name: "Armenia", capital: "Yerevan", continent: "Asia", history: "One of the world's oldest civilizations, Armenia became the first nation to adopt Christianity as its state religion in 301 AD. The Armenian people survived a tragic genocide in 1915 during World War I." },
    { code: "aw", name: "Aruba", capital: "Oranjestad", continent: "North America", history: "A Dutch Caribbean island that became autonomous in 1986. Originally inhabited by the Arawak people, it is now a popular tourist destination known for white sand beaches and constant trade winds." },
    { code: "au", name: "Australia", capital: "Canberra", continent: "Oceania", history: "The world's smallest continent and largest island, Australia has been home to Indigenous Aboriginal peoples for over 65,000 years. Britain established a penal colony there in 1788, and it became a federation in 1901." },
    { code: "at", name: "Austria", capital: "Vienna", continent: "Europe", history: "Once the heart of the powerful Habsburg Empire that ruled much of Europe for 600 years. Austria is the birthplace of Mozart and Freud, and its red-white-red flag dates back to 1230, making it one of the oldest national flags." },
    { code: "az", name: "Azerbaijan", capital: "Baku", continent: "Asia", history: "Known as the 'Land of Fire' due to its natural gas flames that have burned for millennia. In 1918, it became the first Muslim-majority democratic republic in the world, and its capital Baku was once the world's largest oil producer." },

    // B
    { code: "bs", name: "Bahamas", capital: "Nassau", continent: "North America", history: "An archipelago of 700 islands where Christopher Columbus first landed in the Americas in 1492. A British colony until 1973, it is now famous for its crystal-clear waters and as a major banking center." },
    { code: "bh", name: "Bahrain", capital: "Manama", continent: "Asia", history: "An island nation in the Persian Gulf that was home to the ancient Dilmun civilization, a trading hub for 4,000 years. It was the first Gulf state to discover oil in 1932 and is connected to Saudi Arabia by a causeway." },
    { code: "bd", name: "Bangladesh", capital: "Dhaka", continent: "Asia", history: "Born from the Liberation War of 1971 when it separated from Pakistan, Bangladesh sits on the world's largest river delta. Despite its dense population of over 170 million, it has made remarkable strides in development." },
    { code: "bb", name: "Barbados", capital: "Bridgetown", continent: "North America", history: "Often called 'Little England' due to its long British colonial history from 1627 to 1966. It is the birthplace of rum and became a republic in 2021, removing the British monarch as head of state." },
    { code: "by", name: "Belarus", capital: "Minsk", continent: "Europe", history: "Meaning 'White Rus,' Belarus was part of the medieval Grand Duchy of Lithuania and was devastated during World War II. It gained independence from the Soviet Union in 1991." },
    { code: "be", name: "Belgium", capital: "Brussels", continent: "Europe", history: "Created in 1830 when it separated from the Netherlands, Belgium serves as the headquarters of both the European Union and NATO. The country is divided between Dutch-speaking Flanders and French-speaking Wallonia." },
    { code: "bz", name: "Belize", capital: "Belmopan", continent: "North America", history: "The only English-speaking country in Central America, Belize was once the heart of the ancient Maya civilization. Known as British Honduras until independence in 1981, it boasts the second-largest barrier reef in the world." },
    { code: "bj", name: "Benin", capital: "Porto-Novo", continent: "Africa", history: "Considered the birthplace of the Voodoo religion, Benin was once home to the powerful Kingdom of Dahomey, famous for its female warriors. It served as a major port during the Atlantic slave trade." },
    { code: "bm", name: "Bermuda", capital: "Hamilton", continent: "North America", history: "A British territory since 1612, making it England's oldest remaining colony. Famous for the mysterious Bermuda Triangle, its pink sand beaches, and the origin of Bermuda shorts." },
    { code: "bt", name: "Bhutan", capital: "Thimphu", continent: "Asia", history: "Known as the 'Land of the Thunder Dragon,' Bhutan is the world's last Buddhist kingdom and was never colonized. It uniquely measures success through Gross National Happiness rather than GDP and remains carbon-negative." },
    { code: "bo", name: "Bolivia", capital: "Sucre", continent: "South America", history: "Named after the liberator Simón Bolívar, Bolivia lost its Pacific coastline to Chile in 1884. Its administrative capital La Paz is the world's highest capital city, and the country holds the world's largest lithium reserves." },
    { code: "ba", name: "Bosnia and Herzegovina", capital: "Sarajevo", continent: "Europe", history: "The place where World War I began with the assassination of Archduke Franz Ferdinand in 1914. After centuries of Ottoman and Austro-Hungarian rule, it endured a tragic civil war in the 1990s." },
    { code: "bw", name: "Botswana", capital: "Gaborone", continent: "Africa", history: "One of Africa's greatest success stories, Botswana transformed from one of the world's poorest countries to an upper-middle-income nation through diamond wealth and stable democracy since independence in 1966." },
    { code: "br", name: "Brazil", capital: "Brasília", continent: "South America", history: "The world's fifth-largest country and the only Portuguese-speaking nation in the Americas. Home to the Amazon rainforest which contains 10% of Earth's species, Brazil is also a five-time FIFA World Cup champion." },
    { code: "io", name: "British Indian Ocean Territory", capital: "Diego Garcia", continent: "Africa", history: "A British territory in the Indian Ocean that hosts a strategic U.S. military base on Diego Garcia. Its original Chagossian population was controversially relocated in the 1960s and 70s." },
    { code: "vg", name: "British Virgin Islands", capital: "Road Town", continent: "North America", history: "A British territory since 1672 comprising over 60 islands, most of which are uninhabited. It has become a popular offshore financial center and a premier destination for sailing enthusiasts." },
    { code: "bn", name: "Brunei", capital: "Bandar Seri Begawan", continent: "Asia", history: "A small but wealthy oil sultanate on the island of Borneo. Its empire once controlled much of the Philippines, and its Sultan remains one of the world's richest monarchs." },
    { code: "bg", name: "Bulgaria", capital: "Sofia", continent: "Europe", history: "The first Slavic country to adopt the Cyrillic alphabet, Bulgaria spent nearly 500 years under Ottoman rule until 1878. It is the world's largest producer of rose oil used in perfumes." },
    { code: "bf", name: "Burkina Faso", capital: "Ouagadougou", continent: "Africa", history: "Meaning 'Land of Upright People,' it was renamed from Upper Volta in 1984 by revolutionary leader Thomas Sankara, often called 'Africa's Che Guevara.' The country faces ongoing challenges in the Sahel region." },
    { code: "bi", name: "Burundi", capital: "Gitega", continent: "Africa", history: "One of Africa's most densely populated nations, Burundi was an ancient kingdom before becoming a German and then Belgian colony. Coffee exports remain vital to its economy." },

    // C
    { code: "kh", name: "Cambodia", capital: "Phnom Penh", continent: "Asia", history: "Home to the mighty Khmer Empire that built Angkor Wat, the world's largest religious monument. The country suffered terribly under the Khmer Rouge regime from 1975-79, which killed nearly two million people." },
    { code: "cm", name: "Cameroon", capital: "Yaoundé", continent: "Africa", history: "Often called 'Africa in Miniature' because of its diverse geography and over 250 ethnic groups. Named after the Portuguese word for shrimp (camarões), it was a German colony before being divided between France and Britain." },
    { code: "ca", name: "Canada", capital: "Ottawa", continent: "North America", history: "The world's second-largest country by area, Canada has been home to Indigenous peoples for over 15,000 years. It became a self-governing confederation in 1867 and remains officially bilingual in English and French." },
    { code: "cv", name: "Cape Verde", capital: "Praia", continent: "Africa", history: "An Atlantic archipelago that was uninhabited until Portuguese explorers arrived in 1456. It served as a hub during the slave trade and gained independence in 1975, becoming known for its morna music and large diaspora." },
    { code: "ky", name: "Cayman Islands", capital: "George Town", continent: "North America", history: "A British territory discovered by Columbus in 1503 and named after the crocodiles (caimans) found there. Today it is one of the world's largest offshore banking centers and a premier diving destination." },
    { code: "cf", name: "Central African Republic", capital: "Bangui", continent: "Africa", history: "A landlocked nation with a troubled history, including a brief period as an 'empire' under Jean-Bédel Bokassa from 1976-79. Despite being rich in diamonds, it remains one of the world's poorest countries." },
    { code: "td", name: "Chad", capital: "N'Djamena", continent: "Africa", history: "Named after Lake Chad, this nation was home to the Kanem-Bornu Empire that flourished for over a millennium. A French colony until 1960, it discovered oil in 2003 which has transformed its economy." },
    { code: "cl", name: "Chile", capital: "Santiago", continent: "South America", history: "The world's longest country, stretching 4,300 km from north to south but averaging only 177 km wide. The indigenous Mapuche people resisted Spanish conquest longer than any other group in the Americas." },
    { code: "cn", name: "China", capital: "Beijing", continent: "Asia", history: "Home to one of the world's oldest continuous civilizations spanning over 5,000 years. China invented paper, printing, gunpowder, and the compass, and was the world's most populous country until 2023." },
    { code: "cx", name: "Christmas Island", capital: "Flying Fish Cove", continent: "Oceania", history: "An Australian territory in the Indian Ocean named for the date of its discovery in 1643. It is famous for the annual migration of over 50 million red crabs from the forest to the sea." },
    { code: "cc", name: "Cocos Islands", capital: "West Island", continent: "Oceania", history: "An Australian territory of 27 small coral islands, settled by the Clunies-Ross family in 1827. The islands have a predominantly Malay population and were the site of a naval battle during World War I." },
    { code: "co", name: "Colombia", capital: "Bogotá", continent: "South America", history: "Named after Christopher Columbus, Colombia was the center of the legendary El Dorado and Spanish colonial power in South America. It is the world's leading producer of emeralds and a major coffee exporter." },
    { code: "km", name: "Comoros", capital: "Moroni", continent: "Africa", history: "A volcanic archipelago between Africa and Madagascar with Arab, African, and Malay influences. Independent from France since 1975, it is the world's largest producer of ylang-ylang essential oil." },
    { code: "ck", name: "Cook Islands", capital: "Avarua", continent: "Oceania", history: "A self-governing nation in free association with New Zealand, named after Captain James Cook who arrived in 1773. Its 15 islands are spread across a vast area of the Pacific Ocean." },
    { code: "cr", name: "Costa Rica", capital: "San José", continent: "North America", history: "Meaning 'Rich Coast' in Spanish, Costa Rica abolished its military in 1948 and has been a stable democracy ever since. It contains 5% of the world's biodiversity and pioneered ecotourism." },
    { code: "hr", name: "Croatia", capital: "Zagreb", continent: "Europe", history: "A Balkan nation with a stunning Adriatic coastline, Croatia was part of Yugoslavia until declaring independence in 1991. Its walled city of Dubrovnik is a UNESCO World Heritage Site and filming location for Game of Thrones." },
    { code: "cu", name: "Cuba", capital: "Havana", continent: "North America", history: "The largest island in the Caribbean, Cuba was a Spanish colony until 1898 and came under U.S. influence until Fidel Castro's revolution in 1959. It is famous for its vintage cars, cigars, and vibrant music." },
    { code: "cw", name: "Curacao", capital: "Willemstad", continent: "North America", history: "A Dutch Caribbean island famous for its colorful waterfront, which is a UNESCO World Heritage Site. It became an autonomous country within the Kingdom of the Netherlands in 2010 and gave its name to the blue liqueur." },
    { code: "cy", name: "Cyprus", capital: "Nicosia", continent: "Europe", history: "An island nation at the crossroads of Europe, Asia, and Africa, associated with the goddess Aphrodite in Greek mythology. It has been divided between Greek and Turkish Cypriots since 1974." },
    { code: "cz", name: "Czech Republic", capital: "Prague", continent: "Europe", history: "Once the heart of the Bohemian kingdom within the Holy Roman Empire, it peacefully split from Slovakia in 1993 in what was called the 'Velvet Divorce.' Prague is renowned for its medieval architecture and beer culture." },
    { code: "cd", name: "Democratic Republic of the Congo", capital: "Kinshasa", continent: "Africa", history: "Africa's second-largest country, it was brutally exploited as the personal colony of Belgium's King Leopold II. Rich in minerals including cobalt and coltan, it has faced decades of conflict and instability." },

    // D
    { code: "dk", name: "Denmark", capital: "Copenhagen", continent: "Europe", history: "A Scandinavian nation with a proud Viking heritage, Denmark has the world's oldest monarchy and one of the oldest continuously used flags (the Dannebrog). It consistently ranks among the world's happiest countries." },
    { code: "dj", name: "Djibouti", capital: "Djibouti", continent: "Africa", history: "A small nation strategically located at the Horn of Africa where the Red Sea meets the Gulf of Aden. A French colony until 1977, it now hosts military bases from several foreign nations." },
    { code: "dm", name: "Dominica", capital: "Roseau", continent: "North America", history: "Known as the 'Nature Island' for its lush rainforests and hot springs, Dominica is home to the last remaining Kalinago (Carib) people in the Caribbean. It gained independence from Britain in 1978." },
    { code: "do", name: "Dominican Republic", capital: "Santo Domingo", continent: "North America", history: "Sharing the island of Hispaniola with Haiti, the Dominican Republic was where Columbus landed in 1492. Its capital Santo Domingo was the first permanent European settlement in the Americas." },

    // E
    { code: "ec", name: "Ecuador", capital: "Quito", continent: "South America", history: "Named for the equator that runs through it, Ecuador was part of the Inca Empire before Spanish conquest. It owns the Galápagos Islands, whose unique wildlife inspired Charles Darwin's theory of evolution." },
    { code: "eg", name: "Egypt", capital: "Cairo", continent: "Africa", history: "One of the world's oldest civilizations, Egypt built the pyramids and was ruled by pharaohs for over 3,000 years. The Suez Canal, opened in 1869, remains one of the world's most important waterways." },
    { code: "sv", name: "El Salvador", capital: "San Salvador", continent: "North America", history: "The smallest and most densely populated country in Central America, El Salvador endured a civil war from 1979 to 1992. In 2021, it became the first country in the world to adopt Bitcoin as legal tender." },
    { code: "gq", name: "Equatorial Guinea", capital: "Malabo", continent: "Africa", history: "The only Spanish-speaking country in Africa, it became wealthy after oil was discovered in the 1990s. However, this wealth has been very unequally distributed among its population." },
    { code: "er", name: "Eritrea", capital: "Asmara", continent: "Africa", history: "A former Italian colony with a beautiful Art Deco capital city, Eritrea fought a 30-year war for independence from Ethiopia, finally achieving it in 1993. It remains one of the world's most isolated nations." },
    { code: "ee", name: "Estonia", capital: "Tallinn", continent: "Europe", history: "A Baltic nation that pioneered digital governance and is known as 'e-Estonia.' Occupied by the Soviet Union from 1940-91, it regained independence through the peaceful 'Singing Revolution.'" },
    { code: "sz", name: "Eswatini", capital: "Mbabane", continent: "Africa", history: "Africa's last absolute monarchy, formerly known as Swaziland until 2018. The small nation has preserved its traditional Swazi culture and was a British protectorate until independence in 1968." },
    { code: "et", name: "Ethiopia", capital: "Addis Ababa", continent: "Africa", history: "One of the world's oldest nations and the only African country never colonized except for a brief Italian occupation. It is where coffee originated and is home to the famous fossil 'Lucy.'" },

    // F
    { code: "fk", name: "Falkland Islands", capital: "Stanley", continent: "South America", history: "A British territory in the South Atlantic that Argentina calls the Malvinas and claims as its own. The two countries fought a war over the islands in 1982. Penguins significantly outnumber the human population." },
    { code: "fo", name: "Faroe Islands", capital: "Tórshavn", continent: "Europe", history: "A self-governing territory of Denmark with dramatic cliffs and a strong Viking heritage. Settled by Norse Vikings in the 800s, the islands are not part of the European Union." },
    { code: "fj", name: "Fiji", capital: "Suva", continent: "Oceania", history: "An archipelago of 333 islands in the South Pacific that gained independence from Britain in 1970. The population is divided between indigenous Fijians and Indo-Fijians descended from laborers brought by the British." },
    { code: "fi", name: "Finland", capital: "Helsinki", continent: "Europe", history: "A Nordic nation that was ruled by Sweden for centuries, then Russia, before gaining independence in 1917. Famous for saunas, Nokia phones, and one of the world's best education systems." },
    { code: "fr", name: "France", capital: "Paris", continent: "Europe", history: "One of the world's most influential nations, France's revolution in 1789 introduced the ideals of liberty, equality, and fraternity. It was a founding member of the European Union and remains a global center for culture and cuisine." },
    { code: "gf", name: "French Guiana", capital: "Cayenne", continent: "South America", history: "An overseas territory of France in South America, famous for the notorious Devil's Island penal colony. Today it hosts the European Space Agency's launch site, which puts satellites into orbit." },
    { code: "pf", name: "French Polynesia", capital: "Papeete", continent: "Oceania", history: "A French overseas territory of 118 islands including Tahiti and Bora Bora in the South Pacific. France conducted nuclear tests here from 1966 to 1996, and the islands are known for their black pearls." },

    // G
    { code: "ga", name: "Gabon", capital: "Libreville", continent: "Africa", history: "A wealthy oil-producing nation where rainforest covers 85% of the land. The Bongo family ruled for 56 years until 2023. It is home to endangered gorillas and forest elephants." },
    { code: "gm", name: "Gambia", capital: "Banjul", continent: "Africa", history: "Africa's smallest mainland country, a narrow nation along the Gambia River entirely surrounded by Senegal except for its coastline. It was a British colony and briefly united with Senegal in the 1980s." },
    { code: "ge", name: "Georgia", capital: "Tbilisi", continent: "Asia", history: "A Caucasus nation with one of the world's oldest wine-making traditions, dating back 8,000 years. It has its own unique alphabet and was the birthplace of Joseph Stalin." },
    { code: "de", name: "Germany", capital: "Berlin", continent: "Europe", history: "A Central European powerhouse that unified in 1871, was divided after World War II, and reunited in 1990 with the fall of the Berlin Wall. It is Europe's largest economy and the birthplace of the Protestant Reformation." },
    { code: "gh", name: "Ghana", capital: "Accra", continent: "Africa", history: "The first sub-Saharan African nation to gain independence from colonial rule, in 1957 under Kwame Nkrumah. Once called the Gold Coast, it was home to the wealthy Ashanti Empire and remains a major cocoa producer." },
    { code: "gi", name: "Gibraltar", capital: "Gibraltar", continent: "Europe", history: "A British territory since 1713 at the entrance to the Mediterranean Sea, which Spain continues to claim. The famous Rock of Gibraltar is home to the only wild monkey population in Europe—Barbary macaques." },
    { code: "gr", name: "Greece", capital: "Athens", continent: "Europe", history: "The cradle of Western civilization, Greece gave the world democracy, philosophy, the Olympics, and much of its science and art. After centuries of Ottoman rule, it gained independence in 1821." },
    { code: "gl", name: "Greenland", capital: "Nuuk", continent: "North America", history: "The world's largest island, Greenland is an autonomous Danish territory. Despite its name (given by Vikings to attract settlers), it is mostly covered by ice that holds 10% of the world's fresh water." },
    { code: "gd", name: "Grenada", capital: "St. George's", continent: "North America", history: "Known as the 'Spice Island' for producing nutmeg, Grenada was invaded by the United States in 1983 after a military coup. It gained independence from Britain in 1974." },
    { code: "gp", name: "Guadeloupe", capital: "Basse-Terre", continent: "North America", history: "A French Caribbean department consisting of butterfly-shaped twin islands. It was the site of fierce resistance to the restoration of slavery in 1802, led by Louis Delgrès." },
    { code: "gu", name: "Guam", capital: "Hagåtña", continent: "Oceania", history: "A U.S. territory in the Pacific since the Spanish-American War of 1898. Home to the indigenous Chamorro people, it was occupied by Japan during World War II and now hosts major American military bases." },
    { code: "gt", name: "Guatemala", capital: "Guatemala City", continent: "North America", history: "The heart of the ancient Maya civilization, with ruins like Tikal still standing in its jungles. It endured a 36-year civil war that ended in 1996 and has the largest population in Central America." },
    { code: "gg", name: "Guernsey", capital: "St. Peter Port", continent: "Europe", history: "A British Crown dependency in the Channel Islands with Norman French heritage. It was occupied by Germany during World War II, and writer Victor Hugo lived in exile there for 15 years." },
    { code: "gn", name: "Guinea", capital: "Conakry", continent: "Africa", history: "The first French African colony to vote for independence in 1958, rejecting continued ties with France. It has some of the world's largest bauxite reserves and was hit hard by the 2014 Ebola outbreak." },
    { code: "gw", name: "Guinea-Bissau", capital: "Bissau", continent: "Africa", history: "A small West African nation that fought an independence war against Portugal until 1973. It has suffered chronic political instability with many coups, and its economy depends heavily on cashew nut exports." },
    { code: "gy", name: "Guyana", capital: "Georgetown", continent: "South America", history: "The only English-speaking country in South America, Guyana was traded by the Dutch to Britain in exchange for New York. Recent offshore oil discoveries are rapidly transforming its economy." },

    // H
    { code: "ht", name: "Haiti", capital: "Port-au-Prince", continent: "North America", history: "The first Black republic in the world, Haiti won independence in 1804 through a successful slave revolution that defeated Napoleon's armies. It shares the island of Hispaniola with the Dominican Republic." },
    { code: "hn", name: "Honduras", capital: "Tegucigalpa", continent: "North America", history: "Home to the ancient Maya city of Copán, Honduras gave rise to the term 'Banana Republic' due to the influence of American fruit companies. Hurricane Mitch devastated the country in 1998." },
    { code: "hk", name: "Hong Kong", capital: "Hong Kong", continent: "Asia", history: "A British colony from 1841 to 1997, when it was returned to China as a Special Administrative Region. It developed into one of the world's major financial centers under the 'One Country, Two Systems' framework." },
    { code: "hu", name: "Hungary", capital: "Budapest", continent: "Europe", history: "A Central European nation whose Magyar ancestors arrived in the 9th century. It was part of the Austro-Hungarian Empire and later suffered under both Nazi occupation and Soviet communist rule." },

    // I
    { code: "is", name: "Iceland", capital: "Reykjavik", continent: "Europe", history: "A volcanic island nation settled by Vikings around 874 AD, Iceland has the world's oldest parliament, the Althing, founded in 930. It is known for its geysers, glaciers, and the Northern Lights." },
    { code: "in", name: "India", capital: "New Delhi", continent: "Asia", history: "One of the world's oldest civilizations, home to the ancient Indus Valley culture. After centuries of Mughal rule and British colonization, India gained independence in 1947 and is now the world's largest democracy." },
    { code: "id", name: "Indonesia", capital: "Jakarta", continent: "Asia", history: "The world's largest archipelago with over 17,000 islands, Indonesia was a Dutch colony known as the East Indies until independence in 1945. It has the world's largest Muslim population and incredible biodiversity." },
    { code: "ir", name: "Iran", capital: "Tehran", continent: "Asia", history: "The ancient Persian Empire was one of history's greatest civilizations, founded by Cyrus the Great. The 1979 Islamic Revolution transformed the country into a theocratic republic." },
    { code: "iq", name: "Iraq", capital: "Baghdad", continent: "Asia", history: "Home to ancient Mesopotamia, the 'Cradle of Civilization' where writing was invented. It was the center of the Islamic Golden Age before suffering through decades of conflict including the 2003 U.S. invasion." },
    { code: "ie", name: "Ireland", capital: "Dublin", continent: "Europe", history: "An island nation with rich Celtic heritage that endured centuries of English rule and a devastating famine in the 1840s. It gained independence in 1921 and has produced many of the world's greatest writers." },
    { code: "im", name: "Isle of Man", capital: "Douglas", continent: "Europe", history: "A British Crown dependency between England and Ireland with the world's oldest continuously running parliament, the Tynwald. It is famous for the TT motorcycle race and its three-legged triskelion symbol." },
    { code: "il", name: "Israel", capital: "Jerusalem", continent: "Asia", history: "Established in 1948 as a homeland for the Jewish people, Israel was founded after the Holocaust and on ancient Biblical lands. The region remains at the center of ongoing Israeli-Palestinian conflict." },
    { code: "it", name: "Italy", capital: "Rome", continent: "Europe", history: "The center of the Roman Empire and the birthplace of the Renaissance, Italy unified as a nation in 1861. It is home to the most UNESCO World Heritage Sites in the world and is renowned for art, fashion, and cuisine." },
    { code: "ci", name: "Ivory Coast", capital: "Yamoussoukro", continent: "Africa", history: "Once France's most prosperous African colony, Ivory Coast produces 40% of the world's cocoa. It experienced civil wars in the 2000s and is home to the world's largest church, the Basilica of Our Lady of Peace." },

    // J
    { code: "jm", name: "Jamaica", capital: "Kingston", continent: "North America", history: "A Caribbean island that was a Spanish and then British colony, gaining independence in 1962. It is the birthplace of reggae music, Bob Marley, and the Rastafari movement, as well as sprinter Usain Bolt." },
    { code: "jp", name: "Japan", capital: "Tokyo", continent: "Asia", history: "An island nation with a 2,000-year-old imperial dynasty, Japan was ruled by shoguns and samurai for centuries. After World War II devastation, it rebuilt into the world's third-largest economy." },
    { code: "je", name: "Jersey", capital: "St. Helier", continent: "Europe", history: "The largest of the Channel Islands and a British Crown dependency with Norman French heritage. It was occupied by Germany during World War II and has become a major offshore financial center." },
    { code: "jo", name: "Jordan", capital: "Amman", continent: "Asia", history: "A Hashemite kingdom since 1921, Jordan is home to the ancient city of Petra, one of the New Seven Wonders of the World. It has remained stable in a turbulent region and hosts many Palestinian refugees." },

    // K
    { code: "kz", name: "Kazakhstan", capital: "Astana", continent: "Asia", history: "The world's largest landlocked country, Kazakhstan was part of the Silk Road before becoming Soviet. It hosts the Baikonur Cosmodrome, from which Yuri Gagarin launched to become the first human in space." },
    { code: "ke", name: "Kenya", capital: "Nairobi", continent: "Africa", history: "A country where some of humanity's oldest fossils have been found, Kenya gained independence from Britain in 1963 after the Mau Mau uprising. It is famous for its wildlife safaris and world-champion marathon runners." },
    { code: "ki", name: "Kiribati", capital: "Tarawa", continent: "Oceania", history: "A Pacific island nation of 33 atolls spread across an area the size of India. It was the first country to see the new millennium in 2000 but now faces an existential threat from rising sea levels." },
    { code: "xk", name: "Kosovo", capital: "Pristina", continent: "Europe", history: "Europe's youngest country, Kosovo declared independence from Serbia in 2008, though not all nations recognize it. NATO intervened in 1999 to stop ethnic cleansing of its Albanian majority population." },
    { code: "kw", name: "Kuwait", capital: "Kuwait City", continent: "Asia", history: "A small but oil-rich Persian Gulf emirate that was a British protectorate until 1961. Iraq's invasion in 1990 led to the Gulf War, and Kuwait was liberated by an international coalition in 1991." },
    { code: "kg", name: "Kyrgyzstan", capital: "Bishkek", continent: "Asia", history: "A mountainous Central Asian nation with a proud nomadic heritage, where traditional yurt camps still dot the landscape. It gained independence from the Soviet Union in 1991 and has experienced several revolutions." },

    // L
    { code: "la", name: "Laos", capital: "Vientiane", continent: "Asia", history: "A landlocked Southeast Asian nation that holds the tragic distinction of being the most bombed country per capita in history due to the Vietnam War. It has been a communist state since 1975." },
    { code: "lv", name: "Latvia", capital: "Riga", continent: "Europe", history: "A Baltic nation that regained independence from the Soviet Union in 1991 through the peaceful 'Singing Revolution.' Its capital Riga is famous for its Art Nouveau architecture." },
    { code: "lb", name: "Lebanon", capital: "Beirut", continent: "Asia", history: "Home to the ancient Phoenicians who invented the alphabet, Lebanon was known as the 'Paris of the Middle East' before its 1975-90 civil war. The 2020 Beirut port explosion devastated the capital." },
    { code: "ls", name: "Lesotho", capital: "Maseru", continent: "Africa", history: "Known as the 'Kingdom in the Sky,' Lesotho is entirely surrounded by South Africa and is the only country in the world where all its territory is above 1,000 meters. It exports water to South Africa." },
    { code: "lr", name: "Liberia", capital: "Monrovia", continent: "Africa", history: "Founded in 1847 by freed American slaves, Liberia was never colonized by Europeans. Its capital is named after U.S. President James Monroe. The country endured devastating civil wars from 1989 to 2003." },
    { code: "ly", name: "Libya", capital: "Tripoli", continent: "Africa", history: "A North African nation with significant ancient Greek and Roman ruins, Libya was an Italian colony before independence. Muammar Gaddafi ruled for 42 years until his overthrow and death in 2011." },
    { code: "li", name: "Liechtenstein", capital: "Vaduz", continent: "Europe", history: "A tiny Alpine principality between Switzerland and Austria, it has been independent since 1806 and is the last remnant of the Holy Roman Empire. It has no army and is a major financial center." },
    { code: "lt", name: "Lithuania", capital: "Vilnius", continent: "Europe", history: "A Baltic nation whose medieval Grand Duchy once stretched from the Baltic to the Black Sea. It was the first Soviet republic to declare independence in 1990 and is known for its basketball passion." },
    { code: "lu", name: "Luxembourg", capital: "Luxembourg", continent: "Europe", history: "A tiny Grand Duchy that is a founding member of the European Union, NATO, and the United Nations. Despite its small size, it has the highest GDP per capita in the world due to its banking sector." },

    // M
    { code: "mo", name: "Macau", capital: "Macau", continent: "Asia", history: "A former Portuguese colony from 1557 to 1999, Macau is now a Chinese Special Administrative Region. Its gambling industry generates more revenue than Las Vegas, and its historic center is a UNESCO World Heritage Site." },
    { code: "mg", name: "Madagascar", capital: "Antananarivo", continent: "Africa", history: "The world's fourth-largest island, Madagascar split from India 88 million years ago and developed unique wildlife—90% of its species, including lemurs, are found nowhere else on Earth." },
    { code: "mw", name: "Malawi", capital: "Lilongwe", continent: "Africa", history: "Known as the 'Warm Heart of Africa' for its friendly people, Malawi is home to Lake Malawi, which contains more fish species than any other lake. It gained independence from Britain in 1964." },
    { code: "my", name: "Malaysia", capital: "Kuala Lumpur", continent: "Asia", history: "A Southeast Asian federation formed in 1963, Malaysia is a multicultural nation of Malays, Chinese, and Indians. Its Petronas Towers were the world's tallest buildings from 1998 to 2004." },
    { code: "mv", name: "Maldives", capital: "Malé", continent: "Asia", history: "The world's lowest-lying country, with an average elevation of just 1.5 meters above sea level. This island nation of about 1,200 coral islands faces an existential threat from rising sea levels." },
    { code: "ml", name: "Mali", capital: "Bamako", continent: "Africa", history: "Home to the wealthy Mali Empire and the legendary city of Timbuktu, which was a center of Islamic learning. The country has faced ongoing conflict and jihadist insurgency since 2012." },
    { code: "mt", name: "Malta", capital: "Valletta", continent: "Europe", history: "A strategic Mediterranean island nation ruled by the Knights of St. John from 1530 to 1798. During World War II, its people's bravery under siege earned the entire country the George Cross medal." },
    { code: "mh", name: "Marshall Islands", capital: "Majuro", continent: "Oceania", history: "A Pacific island nation that was the site of U.S. nuclear testing, including 67 bombs at Bikini Atoll. Independent since 1986, it remains in free association with the United States." },
    { code: "mq", name: "Martinique", capital: "Fort-de-France", continent: "North America", history: "A French Caribbean island and the birthplace of Empress Josephine, Napoleon's first wife. The 1902 eruption of Mount Pelée killed 30,000 people, making it one of history's deadliest volcanic disasters." },
    { code: "mr", name: "Mauritania", capital: "Nouakchott", continent: "Africa", history: "A Saharan nation that was the last country in the world to officially abolish slavery in 1981. It bridges Arab and African cultures and was an important stop on ancient trans-Saharan trade routes." },
    { code: "mu", name: "Mauritius", capital: "Port Louis", continent: "Africa", history: "An Indian Ocean island that was uninhabited until 1598 and is famous as the home of the now-extinct dodo bird. Today it is one of Africa's most prosperous and diverse democracies." },
    { code: "yt", name: "Mayotte", capital: "Mamoudzou", continent: "Africa", history: "A French department in the Indian Ocean that chose to remain with France when the rest of the Comoros islands became independent. It is the only EU territory in the Southern Hemisphere's Indian Ocean." },
    { code: "mx", name: "Mexico", capital: "Mexico City", continent: "North America", history: "Built on the ruins of the Aztec capital Tenochtitlan, Mexico was Spain's richest colony until independence in 1821. It is home to ancient Maya and Aztec civilizations and vibrant traditions." },
    { code: "fm", name: "Micronesia", capital: "Palikir", continent: "Oceania", history: "A Pacific island nation of 607 islands spread across a vast ocean area. The island of Yap is famous for using giant stone discs as currency, and the country remains in free association with the United States." },
    { code: "md", name: "Moldova", capital: "Chișinău", continent: "Europe", history: "A small landlocked nation between Romania and Ukraine with an 8,000-year tradition of winemaking. The breakaway region of Transnistria has operated as a separate state since 1992." },
    { code: "mc", name: "Monaco", capital: "Monaco", continent: "Europe", history: "The world's second-smallest country and most densely populated, Monaco has been ruled by the Grimaldi family since 1297. It is famous for its casino, Grand Prix, and as a tax haven for the wealthy." },
    { code: "mn", name: "Mongolia", capital: "Ulaanbaatar", continent: "Asia", history: "The homeland of Genghis Khan, whose 13th-century Mongol Empire was the largest contiguous land empire in history. Mongolia maintains its nomadic traditions on vast steppes and the Gobi Desert." },
    { code: "me", name: "Montenegro", capital: "Podgorica", continent: "Europe", history: "A small Adriatic nation whose name means 'Black Mountain,' Montenegro peacefully separated from Serbia in 2006. It has a stunning coastline and medieval villages that draw increasing numbers of tourists." },
    { code: "ms", name: "Montserrat", capital: "Plymouth (abandoned)", continent: "North America", history: "A British Caribbean territory with strong Irish heritage, celebrating St. Patrick's Day as a public holiday. The 1995 eruption of Soufrière Hills volcano buried the capital and made half the island uninhabitable." },
    { code: "ma", name: "Morocco", capital: "Rabat", continent: "Africa", history: "A North African kingdom with Berber, Arab, and European influences, Morocco is the only African country with coastlines on both the Atlantic and Mediterranean. It has been ruled by the same dynasty since 1631." },
    { code: "mz", name: "Mozambique", capital: "Maputo", continent: "Africa", history: "A Portuguese colony until independence in 1975, followed by a devastating civil war until 1992. Recent natural gas discoveries could transform this Indian Ocean nation's economy." },
    { code: "mm", name: "Myanmar", capital: "Naypyidaw", continent: "Asia", history: "Formerly known as Burma, this Southeast Asian nation is home to the ancient temples of Bagan. Military rule has dominated its recent history, including a 2021 coup that ousted the elected government." },

    // N
    { code: "na", name: "Namibia", capital: "Windhoek", continent: "Africa", history: "Home to the Namib, the world's oldest desert, Namibia was a German colony where the first genocide of the 20th century occurred against the Herero people. It gained independence from South Africa in 1990." },
    { code: "nr", name: "Nauru", capital: "Yaren", continent: "Oceania", history: "The world's smallest republic and third-smallest country, Nauru was once wealthy from phosphate mining but has struggled since those resources were exhausted. It now hosts an Australian refugee detention center." },
    { code: "np", name: "Nepal", capital: "Kathmandu", continent: "Asia", history: "Home to Mount Everest and the world's only Hindu kingdom until 2008, Nepal was never colonized. It is the birthplace of Buddha and famous for its Gurkha soldiers who serve in the British Army." },
    { code: "nl", name: "Netherlands", capital: "Amsterdam", continent: "Europe", history: "A nation that famously reclaimed much of its land from the sea with dikes and windmills. During its 17th-century Golden Age, the Dutch built a global trading empire and became pioneers of capitalism." },
    { code: "nc", name: "New Caledonia", capital: "Nouméa", continent: "Oceania", history: "A French territory in the Pacific that has held several independence referendums. It is home to the indigenous Kanak people and holds about 25% of the world's known nickel reserves." },
    { code: "nz", name: "New Zealand", capital: "Wellington", continent: "Oceania", history: "Settled by Polynesian Maori around the 13th century, New Zealand became a British colony in 1840 with the Treaty of Waitangi. It was the first country to give women the right to vote in 1893." },
    { code: "ni", name: "Nicaragua", capital: "Managua", continent: "North America", history: "The largest country in Central America, Nicaragua overthrew the Somoza dictatorship in the 1979 Sandinista Revolution. The Contra war of the 1980s devastated the country's development." },
    { code: "ne", name: "Niger", capital: "Niamey", continent: "Africa", history: "A landlocked Saharan nation named after the Niger River, Niger was a French colony until 1960. It has one of the world's highest birth rates and faces challenges from drought and extremist groups." },
    { code: "ng", name: "Nigeria", capital: "Abuja", continent: "Africa", history: "Africa's most populous nation with over 220 million people and more than 500 ethnic groups. A British colony until 1960, it has vast oil reserves and the continent's largest economy." },
    { code: "nu", name: "Niue", capital: "Alofi", continent: "Oceania", history: "One of the world's largest coral islands, Niue is self-governing in free association with New Zealand. Despite being the world's smallest self-governing state, more Niueans live abroad than on the island." },
    { code: "nf", name: "Norfolk Island", capital: "Kingston", continent: "Oceania", history: "An Australian territory settled by descendants of the HMS Bounty mutineers who came from Pitcairn Island. The distinctive Norfolk Island pine is native to this remote Pacific island." },
    { code: "kp", name: "North Korea", capital: "Pyongyang", continent: "Asia", history: "One of the world's most isolated and secretive nations, North Korea has been ruled by the Kim family since 1948. The Korean War ended in 1953 with an armistice, not a peace treaty." },
    { code: "mk", name: "North Macedonia", capital: "Skopje", continent: "Europe", history: "A former Yugoslav republic that peacefully gained independence in 1991. It resolved a decades-long name dispute with Greece in 2019 by adding 'North' to its name, enabling NATO and EU membership." },
    { code: "mp", name: "Northern Mariana Islands", capital: "Saipan", continent: "Oceania", history: "A U.S. Commonwealth in the Pacific where the Battle of Saipan was a decisive World War II engagement. The islands are home to Chamorro and Carolinian peoples and depend on tourism." },
    { code: "no", name: "Norway", capital: "Oslo", continent: "Europe", history: "A Scandinavian nation with a proud Viking heritage that gained independence from Sweden in 1905. Oil and gas discoveries have made it one of the world's wealthiest countries with a vast sovereign wealth fund." },

    // O
    { code: "om", name: "Oman", capital: "Muscat", continent: "Asia", history: "An ancient seafaring nation whose empire once controlled Zanzibar and parts of the Indian Ocean coast. Sultan Qaboos modernized the country during his 50-year reign until 2020." },

    // P
    { code: "pk", name: "Pakistan", capital: "Islamabad", continent: "Asia", history: "Created in 1947 when British India was partitioned into Hindu-majority India and Muslim-majority Pakistan. It is a nuclear power and is home to some of the ancient Indus Valley civilization's greatest sites." },
    { code: "pw", name: "Palau", capital: "Ngerulmud", continent: "Oceania", history: "A Pacific island nation known for its pristine marine environments, including a famous lake filled with millions of stingless jellyfish. It has been in free association with the United States since 1994." },
    { code: "ps", name: "Palestine", capital: "Ramallah", continent: "Asia", history: "An ancient land sacred to three religions, Palestine was under British mandate after World War I. The ongoing Israeli-Palestinian conflict over the West Bank and Gaza has lasted for decades." },
    { code: "pa", name: "Panama", capital: "Panama City", continent: "North America", history: "Home to the Panama Canal, one of the world's greatest engineering achievements, Panama gained independence from Colombia in 1903 with U.S. support. It is a major international banking center." },
    { code: "pg", name: "Papua New Guinea", capital: "Port Moresby", continent: "Oceania", history: "The world's most linguistically diverse country with over 850 languages. Many tribal groups in the highlands had no contact with the outside world until the 20th century." },
    { code: "py", name: "Paraguay", capital: "Asunción", continent: "South America", history: "A landlocked nation where the indigenous Guaraní language is spoken alongside Spanish. The devastating War of the Triple Alliance (1864-70) killed most of the male population." },
    { code: "pe", name: "Peru", capital: "Lima", continent: "South America", history: "The heart of the Inca Empire, Peru is home to Machu Picchu, one of the New Seven Wonders of the World. The Spanish conquistadors made Lima the center of their South American empire." },
    { code: "ph", name: "Philippines", capital: "Manila", continent: "Asia", history: "An archipelago of over 7,600 islands that was a Spanish colony for 333 years, then an American colony, then occupied by Japan in World War II. It is the world's largest Catholic nation in Asia." },
    { code: "pn", name: "Pitcairn Islands", capital: "Adamstown", continent: "Oceania", history: "A British territory settled in 1790 by mutineers from HMS Bounty and their Tahitian companions. With about 50 residents, it is one of the world's least populous jurisdictions." },
    { code: "pl", name: "Poland", capital: "Warsaw", continent: "Europe", history: "A Central European nation that was erased from the map for 123 years after being partitioned by neighbors. It regained independence in 1918, endured Nazi occupation, and lived under communism until 1989." },
    { code: "pt", name: "Portugal", capital: "Lisbon", continent: "Europe", history: "A pioneer of the Age of Exploration, Portugal built the first global empire and has the oldest unchanged borders in Europe. It lived under the Salazar dictatorship until the 1974 Carnation Revolution." },
    { code: "pr", name: "Puerto Rico", capital: "San Juan", continent: "North America", history: "A U.S. territory since 1898 after four centuries of Spanish rule, Puerto Rico's status is frequently debated. Hurricane Maria in 2017 caused devastating damage and a massive exodus to the mainland." },

    // Q
    { code: "qa", name: "Qatar", capital: "Doha", continent: "Asia", history: "A small peninsula nation that has transformed from a pearl diving community to one of the world's richest countries through oil and gas. It hosted the 2022 FIFA World Cup." },

    // R
    { code: "cg", name: "Republic of the Congo", capital: "Brazzaville", continent: "Africa", history: "A French colony until 1960, the Republic of the Congo was Africa's first Marxist state. Its capital Brazzaville sits across the Congo River from Kinshasa, capital of its much larger neighbor." },
    { code: "re", name: "Reunion", capital: "Saint-Denis", continent: "Africa", history: "A French department in the Indian Ocean with an active volcano, Piton de la Fournaise. It was uninhabited until the 17th century and has a diverse Creole culture blending African, Indian, and European influences." },
    { code: "ro", name: "Romania", capital: "Bucharest", continent: "Europe", history: "A country with ancient Dacian and Roman heritage, Romania is famous for Transylvania and the Dracula legend. The 1989 revolution overthrew dictator Nicolae Ceaușescu after decades of harsh communist rule." },
    { code: "ru", name: "Russia", capital: "Moscow", continent: "Europe/Asia", history: "The world's largest country by area, stretching across 11 time zones. It was the center of the Soviet Union from 1922-91 and remains a major world power with vast natural resources." },
    { code: "rw", name: "Rwanda", capital: "Kigali", continent: "Africa", history: "A small, densely populated nation that suffered a horrific genocide in 1994 when approximately 800,000 Tutsis were killed. It has since made a remarkable recovery and is often called 'the Singapore of Africa.'" },

    // S
    { code: "bl", name: "Saint Barthelemy", capital: "Gustavia", continent: "North America", history: "A French Caribbean collectivity that was actually a Swedish colony from 1784 to 1878. Today it is a luxury tourism destination popular with celebrities and the wealthy." },
    { code: "sh", name: "Saint Helena", capital: "Jamestown", continent: "Africa", history: "A remote British territory in the South Atlantic famous as Napoleon Bonaparte's place of exile and death from 1815 to 1821. An airport opened in 2017, ending centuries of isolation." },
    { code: "kn", name: "Saint Kitts and Nevis", capital: "Basseterre", continent: "North America", history: "The first British colony in the Caribbean, established in 1623, and the smallest country in the Western Hemisphere. It pioneered the sugar industry and the citizenship-by-investment program." },
    { code: "lc", name: "Saint Lucia", capital: "Castries", continent: "North America", history: "A volcanic Caribbean island famous for its twin Pitons. It changed hands between France and Britain 14 times and has produced two Nobel Prize winners—the highest per capita in the world." },
    { code: "mf", name: "Saint Martin", capital: "Marigot", continent: "North America", history: "The smallest island divided between two nations—France and the Netherlands. According to legend, the border was decided in 1648 by a walking race between a Frenchman and a Dutchman." },
    { code: "pm", name: "Saint Pierre and Miquelon", capital: "Saint-Pierre", continent: "North America", history: "A French territory off the coast of Canada, the last remnant of France's once-vast North American empire. It was a major rum-running center during American Prohibition." },
    { code: "vc", name: "Saint Vincent and the Grenadines", capital: "Kingstown", continent: "North America", history: "A Caribbean nation where the indigenous Caribs resisted European colonization longer than anywhere else in the region. Several islands served as filming locations for Pirates of the Caribbean." },
    { code: "ws", name: "Samoa", capital: "Apia", continent: "Oceania", history: "The heart of Polynesian culture, Samoa was the first Pacific island nation to gain independence in 1962. The traditional fa'a Samoa way of life remains central to society." },
    { code: "sm", name: "San Marino", capital: "San Marino", continent: "Europe", history: "The world's oldest republic, founded in 301 AD, and one of the smallest countries in the world. This tiny enclave surrounded by Italy claims to have never been conquered." },
    { code: "st", name: "Sao Tome and Principe", capital: "São Tomé", continent: "Africa", history: "Africa's smallest country, an island nation in the Gulf of Guinea that straddles the equator. It was uninhabited until Portuguese colonizers arrived in the 1470s and established cocoa plantations." },
    { code: "sa", name: "Saudi Arabia", capital: "Riyadh", continent: "Asia", history: "The birthplace of Islam and home to its two holiest cities, Mecca and Medina. The kingdom was unified in 1932 by Ibn Saud, and its vast oil reserves have made it enormously wealthy and influential." },
    { code: "sn", name: "Senegal", capital: "Dakar", continent: "Africa", history: "A stable West African democracy that has never experienced a coup. Gorée Island off its coast was a major departure point for enslaved Africans, and the country is known for its vibrant music scene." },
    { code: "rs", name: "Serbia", capital: "Belgrade", continent: "Europe", history: "The largest of the former Yugoslav republics, Serbia was at the center of the 1990s Balkan wars. Its medieval kingdom was a significant power before centuries of Ottoman rule." },
    { code: "sc", name: "Seychelles", capital: "Victoria", continent: "Africa", history: "An archipelago of 115 islands in the Indian Ocean that was uninhabited until the 18th century. It is home to giant Aldabra tortoises and the unique coco de mer palm with the world's largest seed." },
    { code: "sl", name: "Sierra Leone", capital: "Freetown", continent: "Africa", history: "Founded as a home for freed slaves, with its capital literally named 'Free Town.' It suffered a brutal civil war from 1991-2002 infamous for 'blood diamonds' and child soldiers." },
    { code: "sg", name: "Singapore", capital: "Singapore", continent: "Asia", history: "A tiny city-state that was expelled from Malaysia in 1965 and transformed from a poor trading post into one of the world's most prosperous nations. It is known for its cleanliness, safety, and strict laws." },
    { code: "sx", name: "Sint Maarten", capital: "Philipsburg", continent: "North America", history: "The Dutch side of an island shared with France, famous for its Maho Beach where planes land just meters above sunbathers. It became an autonomous country within the Netherlands in 2010." },
    { code: "sk", name: "Slovakia", capital: "Bratislava", continent: "Europe", history: "A Central European nation that peacefully separated from the Czech Republic in 1993 in the 'Velvet Divorce.' It was part of Hungary for nearly 1,000 years and has become a major automotive manufacturer." },
    { code: "si", name: "Slovenia", capital: "Ljubljana", continent: "Europe", history: "The first Yugoslav republic to declare independence in 1991, achieving it after a brief 10-day war. This small Alpine nation has the highest GDP per capita of former communist states in Eastern Europe." },
    { code: "sb", name: "Solomon Islands", capital: "Honiara", continent: "Oceania", history: "A Pacific nation that saw fierce fighting during World War II, including the Battle of Guadalcanal. It has experienced ethnic tensions and remains one of the least developed countries in Oceania." },
    { code: "so", name: "Somalia", capital: "Mogadishu", continent: "Africa", history: "A Horn of Africa nation that collapsed into civil war and lawlessness in 1991 and has struggled to rebuild since. It has the world's longest coastline in Africa and the largest camel population." },
    { code: "za", name: "South Africa", capital: "Pretoria", continent: "Africa", history: "A nation that endured the racist apartheid system from 1948 until 1994, when Nelson Mandela became its first Black president. It is Africa's most industrialized economy and has three capital cities." },
    { code: "gs", name: "South Georgia", capital: "King Edward Point", continent: "Antarctica", history: "A remote British territory in the South Atlantic that served as a whaling station and is the final resting place of explorer Ernest Shackleton. It is home to millions of penguins and seals." },
    { code: "kr", name: "South Korea", capital: "Seoul", continent: "Asia", history: "Rising from the devastation of the Korean War, South Korea transformed into an economic powerhouse and vibrant democracy. K-pop and Korean culture have become global phenomena in the 21st century." },
    { code: "ss", name: "South Sudan", capital: "Juba", continent: "Africa", history: "The world's newest country, gaining independence from Sudan in 2011 after decades of civil war. Tragically, it plunged into its own civil war in 2013, creating one of the world's worst humanitarian crises." },
    { code: "es", name: "Spain", capital: "Madrid", continent: "Europe", history: "Once the center of a global empire where 'the sun never set,' Spain was united in 1492 when Ferdinand and Isabella conquered the last Moorish kingdom. It endured a civil war and Franco's dictatorship until 1975." },
    { code: "lk", name: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", continent: "Asia", history: "An island nation known as Ceylon during British rule, Sri Lanka has an ancient Buddhist civilization dating back over 2,500 years. A 26-year civil war between the government and Tamil Tigers ended in 2009." },
    { code: "sd", name: "Sudan", capital: "Khartoum", continent: "Africa", history: "Located where the White and Blue Nile rivers meet, Sudan was home to the ancient Nubian kingdoms. It lost its southern region when South Sudan became independent in 2011." },
    { code: "sr", name: "Suriname", capital: "Paramaribo", continent: "South America", history: "The only Dutch-speaking country in South America, Suriname was famously traded by the Dutch to Britain in exchange for New Amsterdam (now New York). Its population is remarkably diverse." },
    { code: "sj", name: "Svalbard and Jan Mayen", capital: "Longyearbyen", continent: "Europe", history: "A Norwegian Arctic archipelago where polar bears outnumber people. It is home to the Global Seed Vault, which preserves seeds from around the world as a safeguard against extinction." },
    { code: "se", name: "Sweden", capital: "Stockholm", continent: "Europe", history: "A Scandinavian nation with proud Viking heritage that became a major European power in the 17th century. It has not fought a war since 1814 and is famous for its welfare state, IKEA, and pop music." },
    { code: "ch", name: "Switzerland", capital: "Bern", continent: "Europe", history: "A confederation of cantons that has maintained neutrality since 1815 and hosts many international organizations. It is famous for banking, chocolate, watches, and having four official languages." },
    { code: "sy", name: "Syria", capital: "Damascus", continent: "Asia", history: "Home to Damascus, one of the world's oldest continuously inhabited cities. A devastating civil war that began in 2011 has killed hundreds of thousands and displaced millions of Syrians." },

    // T
    { code: "tw", name: "Taiwan", capital: "Taipei", continent: "Asia", history: "An island where the Republic of China government retreated after losing the Chinese civil war in 1949. It developed into a prosperous democracy and is a world leader in semiconductor manufacturing." },
    { code: "tj", name: "Tajikistan", capital: "Dushanbe", continent: "Asia", history: "A mountainous Central Asian nation with Persian heritage, home to the Pamir Mountains known as the 'Roof of the World.' It endured a devastating civil war after independence from the Soviet Union." },
    { code: "tz", name: "Tanzania", capital: "Dodoma", continent: "Africa", history: "Home to Mount Kilimanjaro, Africa's highest peak, and the Serengeti's great wildebeest migration. It was formed when Tanganyika and Zanzibar united in 1964 and pursued African socialism under Julius Nyerere." },
    { code: "th", name: "Thailand", capital: "Bangkok", continent: "Asia", history: "The only Southeast Asian country never colonized by European powers, Thailand (formerly Siam) has been a Buddhist kingdom for centuries. It is a major tourist destination known for temples and beaches." },
    { code: "tl", name: "Timor-Leste", capital: "Dili", continent: "Asia", history: "Also known as East Timor, it was a Portuguese colony until 1975 when Indonesia invaded. After decades of brutal occupation, a UN-supervised referendum led to independence in 2002." },
    { code: "tg", name: "Togo", capital: "Lomé", continent: "Africa", history: "A small West African nation that was German Togoland before being divided between France and Britain after World War I. The Gnassingbé family has ruled since 1967." },
    { code: "tk", name: "Tokelau", capital: "None", continent: "Oceania", history: "A New Zealand territory of three coral atolls with the world's smallest economy. In 2012, it became the first country to generate 100% of its electricity from solar power." },
    { code: "to", name: "Tonga", capital: "Nukuʻalofa", continent: "Oceania", history: "The only Pacific island nation never colonized by Europeans, Tonga has been a monarchy for over a thousand years. A massive underwater volcanic eruption in 2022 caused a global tsunami." },
    { code: "tt", name: "Trinidad and Tobago", capital: "Port of Spain", continent: "North America", history: "A twin-island nation that is the birthplace of steel pan drums and Carnival. It has significant oil and gas reserves and one of the Caribbean's most diverse populations." },
    { code: "tn", name: "Tunisia", capital: "Tunis", continent: "Africa", history: "Home to ancient Carthage, Rome's greatest rival, Tunisia was where the Arab Spring began in 2010 with protests that toppled the government and sparked revolutions across the Arab world." },
    { code: "tr", name: "Turkey", capital: "Ankara", continent: "Asia/Europe", history: "Spanning two continents, Turkey was the heart of the Ottoman Empire for 600 years. Mustafa Kemal Atatürk founded the modern secular republic in 1923 after the empire's collapse." },
    { code: "tm", name: "Turkmenistan", capital: "Ashgabat", continent: "Asia", history: "A Central Asian nation with enormous natural gas reserves and some of the world's most eccentric dictators. The 'Door to Hell' is a gas crater that has been burning since 1971." },
    { code: "tc", name: "Turks and Caicos Islands", capital: "Cockburn Town", continent: "North America", history: "A British territory south of the Bahamas that was once important for salt production. It has considered joining Canada several times and is now a major tourist and offshore banking destination." },
    { code: "tv", name: "Tuvalu", capital: "Funafuti", continent: "Oceania", history: "One of the world's smallest and lowest-lying countries, with a maximum elevation of just 5 meters. It earns significant income from licensing its '.tv' internet domain to television companies." },

    // U
    { code: "ug", name: "Uganda", capital: "Kampala", continent: "Africa", history: "Called the 'Pearl of Africa' by Winston Churchill, Uganda contains the source of the Nile River. It suffered under the brutal dictatorship of Idi Amin in the 1970s but has since stabilized." },
    { code: "ua", name: "Ukraine", capital: "Kyiv", continent: "Europe", history: "The birthplace of East Slavic civilization, Ukraine gained independence when the Soviet Union dissolved in 1991. Russia's annexation of Crimea in 2014 and full-scale invasion in 2022 have devastated the country." },
    { code: "ae", name: "United Arab Emirates", capital: "Abu Dhabi", continent: "Asia", history: "A federation of seven emirates formed in 1971 that transformed from a pearl-diving economy to a global hub for business and tourism. Dubai's rapid development has made it one of the world's most famous cities." },
    { code: "gb", name: "United Kingdom", capital: "London", continent: "Europe", history: "An island nation that built the largest empire in history and sparked the Industrial Revolution. It consists of England, Scotland, Wales, and Northern Ireland, and voted to leave the European Union in 2016." },
    { code: "us", name: "United States", capital: "Washington, D.C.", continent: "North America", history: "The world's first modern democracy, founded in 1776 when 13 colonies declared independence from Britain. It grew to 50 states and became the world's leading superpower after World War II." },
    { code: "vi", name: "United States Virgin Islands", capital: "Charlotte Amalie", continent: "North America", history: "A U.S. territory since 1917 when the islands were purchased from Denmark. The three main islands—St. Thomas, St. John, and St. Croix—are popular Caribbean tourist destinations." },
    { code: "uy", name: "Uruguay", capital: "Montevideo", continent: "South America", history: "A buffer state created between Argentina and Brazil in the 19th century, Uruguay hosted the first FIFA World Cup in 1930. It is known for progressive social policies and stable democracy." },
    { code: "uz", name: "Uzbekistan", capital: "Tashkent", continent: "Asia", history: "Home to the ancient Silk Road cities of Samarkand and Bukhara, Uzbekistan was the center of the Timurid Empire. Soviet cotton farming caused the Aral Sea to shrink dramatically." },

    // V
    { code: "vu", name: "Vanuatu", capital: "Port Vila", continent: "Oceania", history: "A Pacific island nation ruled jointly by France and Britain until independence in 1980. It is famous for land diving, the precursor to bungee jumping, and its active volcanoes." },
    { code: "va", name: "Vatican City", capital: "Vatican City", continent: "Europe", history: "The world's smallest country and the spiritual center of the Catholic Church. It became independent from Italy through the 1929 Lateran Treaty and houses St. Peter's Basilica and the Sistine Chapel." },
    { code: "ve", name: "Venezuela", capital: "Caracas", continent: "South America", history: "The birthplace of independence hero Simón Bolívar, Venezuela has the world's largest proven oil reserves. Economic collapse and political crisis have caused millions to flee the country since 2015." },
    { code: "vn", name: "Vietnam", capital: "Hanoi", continent: "Asia", history: "A nation that endured a thousand years of Chinese rule, French colonization, and a devastating war with the United States. It reunified under communist rule in 1975 and has since become a major manufacturing hub." },

    // W
    { code: "wf", name: "Wallis and Futuna", capital: "Mata-Utu", continent: "Oceania", history: "A French territory in the South Pacific that maintains three traditional Polynesian kingdoms alongside French administration. It is one of the least visited places in the world." },
    { code: "eh", name: "Western Sahara", capital: "El Aaiún", continent: "Africa", history: "A disputed territory that was Spanish Sahara until 1975 when Morocco occupied most of it. The Polisario Front independence movement controls the rest, and the conflict remains unresolved." },

    // Y
    { code: "ye", name: "Yemen", capital: "Sanaa", continent: "Asia", history: "The land of the legendary Queen of Sheba, Yemen was known in ancient times as Arabia Felix ('Happy Arabia'). A devastating civil war since 2014 has caused one of the world's worst humanitarian crises." },

    // Z
    { code: "zm", name: "Zambia", capital: "Lusaka", continent: "Africa", history: "Named after the Zambezi River, Zambia was Northern Rhodesia under British rule until independence in 1964. It shares Victoria Falls with Zimbabwe and has one of Africa's most stable democracies." },
    { code: "zw", name: "Zimbabwe", capital: "Harare", continent: "Africa", history: "Named after the Great Zimbabwe stone ruins, the country was Rhodesia under white minority rule until 1980. Robert Mugabe's long rule led to economic collapse and hyperinflation." }
];

// Function to get flag URL from FlagCDN (high quality flags)
function getFlagUrl(countryCode, size = 'w320') {
    return `https://flagcdn.com/${size}/${countryCode.toLowerCase()}.png`;
}

// Get country by code
function getCountryByCode(code) {
    return COUNTRIES.find(c => c.code === code);
}

// Get countries by continent
function getCountriesByContinent(continent) {
    return COUNTRIES.filter(c => c.continent === continent);
}

// Get all continents
function getAllContinents() {
    return [...new Set(COUNTRIES.map(c => c.continent))].sort();
}

// Difficulty settings for countries
// Popular/well-known countries for easy mode
const EASY_COUNTRIES = [
    'us', 'gb', 'fr', 'de', 'it', 'es', 'ca', 'au', 'jp', 'cn',
    'br', 'mx', 'in', 'ru', 'kr', 'ar', 'za', 'eg', 'tr', 'nl',
    'be', 'ch', 'at', 'se', 'no', 'dk', 'fi', 'pl', 'pt', 'gr',
    'ie', 'nz', 'sg', 'th', 'id', 'my', 'ph', 'vn', 'pk', 'bd',
    'ng', 'ke', 'ma', 'sa', 'ae', 'il', 'ua', 'co', 'pe', 'cl'
];

// Medium difficulty includes more countries
const MEDIUM_COUNTRIES = [
    ...EASY_COUNTRIES,
    'cz', 'hu', 'ro', 'bg', 'hr', 'sk', 'si', 'rs', 'ba', 'al',
    'mk', 'me', 'ee', 'lv', 'lt', 'by', 'md', 'ge', 'am', 'az',
    'kz', 'uz', 'tm', 'kg', 'tj', 'mn', 'np', 'lk', 'mm', 'kh',
    'la', 'bn', 've', 'ec', 'bo', 'py', 'uy', 'cr', 'pa', 'cu',
    'jm', 'ht', 'do', 'pr', 'gt', 'hn', 'sv', 'ni', 'bz', 'dz',
    'tn', 'ly', 'sd', 'et', 'tz', 'ug', 'rw', 'gh', 'ci', 'sn',
    'cm', 'ao', 'mz', 'zw', 'zm', 'bw', 'na', 'jo', 'lb', 'sy',
    'iq', 'ir', 'af', 'om', 'ye', 'qa', 'kw', 'bh', 'cy', 'mt'
];

// Hard mode includes ALL countries
const HARD_COUNTRIES = COUNTRIES.map(c => c.code);

// Compliments for correct answers
const COMPLIMENTS = [
    "Amazing!",
    "Brilliant!",
    "Excellent!",
    "Fantastic!",
    "Genius!",
    "Incredible!",
    "Outstanding!",
    "Perfect!",
    "Spectacular!",
    "Superb!",
    "Wonderful!",
    "You're on fire!",
    "Unstoppable!",
    "Legend!",
    "World Champion!"
];

// Streak compliments
const STREAK_COMPLIMENTS = {
    3: "Hat Trick!",
    5: "On Fire!",
    7: "Unstoppable!",
    10: "LEGENDARY!",
    15: "GODLIKE!",
    20: "BEYOND MORTAL!"
};

// Hint types
const HINT_TYPES = {
    CONTINENT: 'continent',
    CAPITAL: 'capital',
    FIRST_LETTER: 'first_letter',
    ELIMINATE: 'eliminate'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COUNTRIES, getFlagUrl, getCountryByCode, getCountriesByContinent, getAllContinents, EASY_COUNTRIES, MEDIUM_COUNTRIES, HARD_COUNTRIES, COMPLIMENTS, STREAK_COMPLIMENTS, HINT_TYPES };
}
