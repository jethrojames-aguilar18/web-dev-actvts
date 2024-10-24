document.addEventListener('DOMContentLoaded', () => {
    const regionDropdown = document.getElementById('region');
    const municipalityDropdown = document.getElementById('municipality');
    const districtDropdown = document.getElementById('district');
    const barangayDropdown = document.getElementById('barangay');

        // Data for municipalities, districts, and barangays in NCR
        const ncrData = {
            quezon_city: {
                districts: {
                    1: [
                        'Alicia', 'Bagong Pag-asa', 'Bahay Toro', 'Balingasa', 'Bungad', 'Damar', 'Damayan', 'Del Monte', 'Katipunan', 
                        'Mariblo', 'Masambong', 'N.S. Amoranto (Gintong Silahis)', 'Nayong Kanluran', 'Paang Bundok', 'Pag-ibig sa Nayon', 
                        'Paltok', 'Paraiso', 'Phil-Am', 'Ramon Magsaysay', 'Salvacion', 'San Antonio', 'San Isidro Labrador', 'San Jose', 
                        'Santa Cruz', 'Santa Teresita', 'Santo Cristo', 'Talayan', 'Veterans Village', 'West Triangle'
                    ],
                    2: [
                        'Bagong Silangan', 'Batasan Hills', 'Commonwealth', 'Holy Spirit', 'Payatas'
                    ],
                    3: [
                        'Amihan', 'Bagumbuhay', 'Bagumbayan', 'Bayanihan', 'Blue Ridge A', 'Blue Ridge B', 'Camp Aguinaldo', 'Claro', 
                        'Dioquino Zobel', 'Duyan-Duyan', 'E. Rodriguez', 'East Kamias', 'Escopa I', 'Escopa II', 'Escopa III', 'Escopa IV', 
                        'Libis', 'Loyola Heights', 'Mangga', 'Marilag', 'Masagana', 'Matandang Balara', 'Milagrosa', 'Pansol', 'Quirino 2-A', 
                        'Quirino 2-B', 'Quirino 2-C', 'Quirino 3-A', 'Saint Ignatius', 'San Roque', 'Silangan', 'Socorro', 'Tagumpay', 
                        'Ugong Norte', 'Villa Maria Clara', 'West Kamias', 'White Plains'
                    ],
                    4: [
                        'Bagong Lipunan ng Crame', 'Botocan', 'Central', 'Kristong Hari', 'Damayang Lagi', 'Doña Aurora', 'Doña Imelda', 
                        'Doña Josefa', 'Don Manuel', 'East Triangle', 'Horseshoe', 'Immaculate Conception', 'Kalusugan', 'Kamuning', 
                        'Kaunlaran', 'Krus na Ligas', 'Laging Handa', 'Malaya', 'Mariana', 'Obrero', 'Old Capitol Site', 'Paligsahan', 
                        'Pinyahan', 'Pinagkaisahan', 'Roxas', 'Sacred Heart', 'San Isidro Galas', 'San Martin de Porres', 'San Vicente', 
                        'Santo Niño', 'Santol', 'Sikatuna Village', 'South Triangle', 'Tatalon', 'Teachers Village East', 
                        'Teachers Village West', 'U.P. Campus', 'U.P. Village', 'Valencia'
                    ],
                    5: [
                        'Bagbag', 'Capri', 'Fairview', 'Greater Lagro', 'Gulod', 'Kaligayahan', 'Nagkaisang Nayon', 'North Fairview', 
                        'Novaliches Proper', 'Pasong Putik Proper', 'San Agustin', 'San Bartolome', 'Santa Lucia', 'Santa Monica'
                    ],
                    6: [
                        'Apolonio Samson', 'Baesa', 'Balon-Bato', 'Culiat', 'New Era', 'Pasong Tamo', 'Sangandaan', 'Sauyo', 
                        'Talipapa', 'Tandang Sora', 'Unang Sigaw'
                    ]
                }
            },
            
            valenzuela: {
                districts: {
                    1: [
                        'Arkong Bato', 'Balangkas', 'Bignay', 'Bisig', 'Canumay East', 'Canumay West', 
                        'Coloong', 'Dalandanan', 'Isla', 'Lawang Bato', 'Lingunan', 'Mabolo', 
                        'Malanday', 'Malinta', 'Palasan', 'Pariancillo Villa', 'Pasolo', 'Poblacion', 
                        'Polo', 'Punturin', 'Rincon', 'Tagalag', 'Veinte Reales', 'Wawang Pulo'
                    ],
                    2: [
                        'Bagbaguin', 'Maysan', 'Marulas', 'Gen. T. de Leon', 'Karuhatan', 'Parada', 
                        'Paso de Blas', 'Mapulang Lupa'
                    ]
                }
            },

            marikina: {
                districts: {
                    1: [
                        'Barangka', 'Tañong', 'Jesus dela Peña', 'Industrial Valley Complex', 
                        'Kalumpang', 'San Roque', 'Sta. Elena', 'Sto. Niño', 'Malanday'
                    ],
                    2: [
                        'Concepcion I', 'Concepcion II', 'Nangka', 'Parang', 
                        'Marikina Heights', 'Fortune', 'Tumana'
                    ]
                }
            },

            taguig: {
                districts: {
                    1: [
                        'Bagumbayan', 'Bambang', 'Calzada', 'Comembo', 'Hagonoy', 
                        'Ibayo-Tipas', 'Ligid-Tipas', 'Lower Bicutan', 'New Lower Bicutan', 
                        'Napindan', 'Palingon', 'Pembo', 'Rizal', 'San Miguel', 
                        'Santa Ana', 'Tuktukan', 'Ususan', 'Wawa'
                    ],
                    2: [
                        'Cembo', 'Central Bicutan', 'Central Signal Village', 'East Rembo', 
                        'Fort Bonifacio', 'Katuparan', 'Maharlika Village', 'North Daang Hari', 
                        'North Signal Village', 'Pinagsama', 'Pitogo', 'Post Proper Northside', 
                        'Post Proper Southside', 'South Cembo', 'South Daang Hari', 
                        'South Signal Village', 'Tanyag', 'Upper Bicutan', 'West Rembo', 
                        'Western Bicutan'
                    ]
                }
            },

            pasig: {
                districts: {
                    1: [
                        'Bagong Ilog', 'Bagong Katipunan', 'Bambang', 'Buting', 
                        'Caniogan', 'Kalawaan', 'Kapasigan', 'Kapitolyo', 'Malinao', 
                        'Oranbo', 'Palatiw', 'Pineda', 'Sagad', 'San Antonio', 
                        'San Joaquin', 'San Jose', 'San Nicolas', 'Santa Cruz', 
                        'Santa Rosa', 'Santo Tomas', 'Sumilang', 'Ugong'
                    ],
                    2: [
                        'Dela Paz', 'Manggahan', 'Maybunga', 'Pinagbuhatan', 
                        'Rosario', 'San Miguel', 'Santa Lucia', 'Santolan'
                    ]
                }
            },        
        };

        // Data for municipalities, districts, and barangays in BARMM
        const barmmData = {
            cotabato_city: {
                districts: {
                    1: ['Tamontaka', 'Kalanganan', 'Poblacion', 'Bagua', 'Rosary Heights'],
                }
            },
            
            marawi_city: {
                districts: {
                    1: [
                        'Ambolong', 'Angoyao', 'Bacolod Chico Proper', 'Banga', 'Bangco', 'Banggolo Poblacion', 
                        'Bangon', 'Biaba-Damag', 'Bito Buadi Itowa', 'Bito Buadi Parba', 'Bubonga Pagalamatan', 
                        'Bubonga Lilod Madaya', 'Boganga', 'Boganga II', 'Boto Ambolong', 'Bubonga Cadayonan', 
                        'Bubong Lumbac', 'Bubonga Marawi', 'Bubonga Punod', 'Cabasaran', 'Cabingan', 'Cadayonan', 
                        'Cadayonan II', 'Calocan East', 'Calocan West', 'Kormatan Matampay', 'Daguduban', 'Dansalan', 
                        'Datu Dalidigan', 'Datu Saber (Navarro)', 'Datu Sa Dansalan', 'Dayawan', 'Dimaluna', 'Dulay'
                    ],                
                }
            },

            jolo: {
                districts: {
                    1: [
                        'Alat', 'Asturias', 'Bus-Bus', 'Takut Takut', 'Tulay', 'San Raymundo', 'Chinese Pier', 'Walled City'
                    ],
                }
            },

            lamitan: {
                districts: {
                    1: [
                        'Arco', 'Ba-as', 'Baimbing', 'Balagtasan', 'Balas', 'Balobo', 'Bato', 'Baungos', 
                        'Bohebessey', 'Boheibu', 'Bohenange', 'Bohesapa', 'Boheyakan', 'Boheyawas', 'Buahan', 
                        'Bulanting', 'Bulingan', 'Cabobo', 'Calugusan', 'Campo Uno', 'Colonia', 'Danit-Puntocan', 
                        'Kulay Bato', 'Lebbuh', 'Limo-ok', 'Lo-ok', 'Luksumbang', 'Lumuton', 'Maganda', 'Malakas', 
                        'Maligaya', 'Malinis', 'Malo-ong Canal', 'Malo-ong San Jose', 'Matatag', 'Matibay', 
                        'Parangbasak', 'Sabong', 'Santa Clara', 'Sengal', 'Simbangon', 'Tandong Ahas', 'Tumakid', 
                        'Ubit', 'Ulame'
                    ],
                }
            },

            isabela_city: {
                districts: {
                    1: [
                        'Aguada', 'Balatanay', 'Baluno', 'Begang', 'Binuangan', 'Busay', 'Cabunbata', 
                        'Calvario', 'Carbon', 'Diki', 'Isabela Eastside', 'Isabela Proper', 'Dona Ramona T. Alano', 
                        'Kapatagan Grande', 'Kaumpurnah Zone I', 'Kaumpurnah Zone II', 'Kaumpurnah Zone III', 
                        'Kumalarang', 'La Piedad', 'Lampinigan', 'Lanote', 'Lukbuton', 'Lumbang', 'Makiri', 
                        'Maligue', 'Marang-marang', 'Marketsite', 'Menzi', 'Panigayan', 'Panunsulan', 'Port Area', 
                        'Riverside', 'San Rafael', 'Santa Barbara', 'Santa Cruz', 'Seaside', 'Sumagdang', 
                        'Sunrise Village', 'Tabiawan', 'Tabuk', 'Timpul', 'Kapayawan', 'Masula', 'Small Kapatagan', 
                        'Tampalan'
                    ],
                }
            },        
        };

        // Data for municipalities, districts, and barangays in CAR
        const carData = {
            la_trinidad: {
                districts: {
                    1: [
                        'Alapang', 'AIno', 'Ambiong', 'Bahong', 'Balili', 'Beckel', 'Betag', 'Bineng', 
                        'Cruz', 'Lubas', 'Pico', 'Poblacion', 'Puguis', 'Shilan', 'Tawang', 'Wangal'
                    ],
                    
                }
            },
            
            itogon: {
                districts: {
                    1: [
                        'Ampucao', 'Dalupirip', 'Gumatdang', 'Loacan', 'Poblacion', 'Tinongdan', 
                        'Tuding', 'Ucab', 'Virac'
                    ],
                            
                }
            },

            bangued: {
                districts: {
                    1: [
                        'Ampucao', 'Dalupirip', 'Gumatdang', 'Loacan', 'Poblacion', 'Tinongdan', 
                        'Tuding', 'Ucab', 'Virac', 'Agtangao', 'Angad', 'Bañacao', 'Bangbangar', 
                        'Cabuloan', 'Calaba', 'Calot/Tablac', 'Cosili West', 'Cosili East', 
                        'Dangdangla', 'Lingtan', 'Lipcan', 'Lubong', 'Macarcarmay', 'Macray', 
                        'Maoay', 'Malita', 'Palao', 'Patucannnay', 'Sagap', 'San Antonio', 
                        'Santa Rosa', 'Sao-atan', 'Sappaac', 'Zone 1', 'Zone 2', 'Zone 3', 
                        'Zone 4', 'Zone 5'
                    ],                
                }
            },

            tuba: {
                districts: {
                    1: [
                        'Ansagan', 'Camp 1', 'Camp 3', 'Camp 4', 'Nangalisan', 'Poblacion', 
                        'San Pascual', 'Tabaan Norte', 'Tabaan Sur', 'Tadiangan', 'Taloy Norte', 
                        'Taloy Sur', 'Twin Peaks'
                    ]
                    
                }
            },

            pinukpok: {
                districts: {
                    1: [
                        'Aciga', 'Allaguia', 'Ammacian', 'Apatan', 'Asibanglan', 'Ba-ay', 
                        'Ballayangon', 'Bayao', 'Camalog (formerly Camcamalog)', 
                        'Cawagayan (formerly Cagao-ayan)', 'Dugpa', 'Katabbogan', 
                        'Limos', 'Magaogao', 'Malagnat', 'Mapaco', 'Pakawit', 
                        'Pinococ', 'Pinukpuk Junction-Center', 'Socbot', 
                        'Taga (Poblacion)', 'Taggay', 'Wagud'
                    ]                
                }
            },        
        };

        // Data for municipalities, districts, and barangays in CALABARZON
        const calabarzonData = {
            antipolo: {
                districts: {
                    1: [
                        'Bagong Nayon', 'Beverly Hills', 'De La Paz', 'Mambugan', 
                        'Mayamot', 'Munting Dilao', 'San Isidro', 'Santa Cruz'
                    ],
                    
                    2: [
                        'Calawis', 'Cupang', 'Dalig', 'Inarawan', 'San Jose', 
                        'San Juan', 'San Luis', 'San Roque'
                    ]  
                }
            },
            
            bacoor: {
                districts: {
                    1: [
                        'Alima', 'Aniban I[A]', 'Aniban II[A]', 'Aniban III', 
                        'Aniban IV', 'Aniban V', 'Banalo', 'Camposanto', 
                        'Daang Bukid', 'Digman', 'Dulong Bayan', 'Habay I', 
                        'Habay II', 'Kaingin[A]', 'Ligas I[A]', 'Ligas II[B]', 
                        'Ligas III', 'Mabolo I[A]', 'Mabolo II', 'Mabolo III', 
                        'Maliksi I', 'Maliksi II[A]', 'Maliksi III', 'Niog I[A]', 
                        'Niog II', 'Niog III', 'Panapaan I', 'Panapaan II[A]', 
                        'Panapaan III[B]', 'Panapaan IV[A]', 'Panapaan V[B]', 
                        'Panapaan VI[B]', 'Panapaan VII', 'Panapaan VIII', 
                        'Poblacion[A]', 'Real I[A]', 'Real II', 'Salinas I', 
                        'Salinas II[A]', 'Salinas III', 'Salinas IV', 
                        'San Nicolas I', 'San Nicolas II', 'San Nicolas III', 
                        'Sineguelasan[A]', 'Talaba I[A]', 'Talaba II', 
                        'Talaba III[A]', 'Talaba IV', 'Talaba V', 'Talaba VI', 
                        'Talaba VII', 'Zapote I[A]', 'Zapote II[A]', 
                        'Zapote III[B]', 'Zapote IV', 'Zapote V'
                    ],
                    
                    2: [
                        'Bayanan', 'Mambog I', 'Mambog II[A]', 'Mambog III', 
                        'Mambog IV', 'Mambog V', 'Molino I', 'Molino II', 
                        'Molino III', 'Molino IV', 'Molino V', 'Molino VI', 
                        'Molino VII', 'Queens Row Central', 'Queens Row East', 
                        'Queens Row West'
                    ]                       
                }
            },

            lipa: {
                districts: {
                    1: [
                        'Bagong Pook', 'Banay-Banay', 'Bulaklakan', 'Duhatan', 
                        'Fernando', 'Halang', 'Mataas na Lupa', 'Pangao', 
                        'Pinagtongulan', 'San Carlos', 'San Salvador', 
                        'Sico', 'Tambo', 'Tangway', 'Tibig'
                    ],
                    
                    2: [
                        'Barangay Uno', 'Barangay Dos', 'Barangay Tres', 
                        'Barangay 4', 'Barangay 5', 'Barangay 6', 
                        'Barangay 7', 'Barangay 8', 'Barangay 9', 
                        'Barangay 10', 'Barangay 11'
                    ],
                    
                    3: [
                        'Balintawak', 'Bugtong', 'Bulacnin', 'Dagatan', 
                        'Inosluban', 'Lumbang', 'Marawoy', 'Plaridel', 
                        'Pusil', 'San Lucas', 'Talisay'
                    ],
                    
                    4: [
                        'Antipolo del Norte', 'Antipolo del Sur', 'Latag', 
                        'Malitlit', 'Munting Pulo', 'Pinagkawitan', 
                        'Sabang', 'San Benito', 'San Celestino', 
                        'San Francisco', 'San Isidro', 'San Jose', 
                        'Sto. Niño', 'Sto. Toribio', 'Tangob', 'Tipacan'
                    ],
                    
                    5: [
                        'Adya', 'Anilao', 'Anilao Labac', 'Bolbok', 
                        'Calamias', 'Cumba', 'Kayumanggi', 'Lodlod', 
                        'Mabini', 'Malagonlong', 'Pagolingin Bata', 
                        'Pagolingin East', 'Pagolingin West', 'Quezon', 
                        'Rizal', 'Sampaguita', 'San Guillermo'
                    ]                              
                }
            },

            lucena: {
                districts: {
                    1: [
                        'Barangay 1', 'Barangay 10', 'Barangay 11', 'Barangay 2', 
                        'Barangay 3', 'Barangay 4', 'Barangay 5', 'Barangay 6', 
                        'Barangay 7', 'Barangay 8', 'Barangay 9', 'Barra', 
                        'Bocohan', 'Mayao Castillo', 'Cotta', 'Gulang-gulang', 
                        'Dalahican', 'Domoit', 'Ibabang Dupay', 'Ibabang Iyam', 
                        'Ibabang Talim', 'Ilayang Dupay', 'Ilayang Iyam', 
                        'Ilayang Talim', 'Isabang', 'Mayao Crossing', 
                        'Mayao Kanluran', 'Mayao Parada', 'Mayao Silangan', 
                        'Ransohan', 'Salinas', 'Talao-talao', 'Market View'
                    ],     
                }
            },

            tagaytay: {
                districts: {
                    1: [
                        'Asisan', 'Bagong Tubig', 'Calabuso', 'Dapdap East', 
                        'Dapdap West', 'Francisco', 'Guinhawa North', 
                        'Guinhawa South', 'Iruhin East', 'Iruhin South', 
                        'Iruhin West', 'Kaybagal Central', 'Kaybagal North', 
                        'Kaybagal South (Poblacion)', 'Mag-Asawang Ilat', 
                        'Maharlika East', 'Maharlika West', 'Maitim 2nd Central', 
                        'Maitim 2nd East', 'Maitim 2nd West', 'Mendez Crossing East', 
                        'Mendez Crossing West', 'Neogan', 'Patutong Malaki North', 
                        'Patutong Malaki South', 'Sambong', 'San Jose', 
                        'Silang Junction North', 'Silang Junction South', 
                        'Sungay East', 'Sungay West', 'Tolentino East', 
                        'Tolentino West', 'Zambal'
                    ],                              
                }
            },        
        };

        // Data for municipalities, districts, and barangays in CALABARZON
        const mimaropaData = {
            marinduque: {
                districts: {
                    1: [ 'Boac', 'Buenavista', 'Gasan', 'Mogpog', 'Torijos', 'Santa Cruz' ]
                }
            },
            
            occidental_mindoro: {
                districts: {
                    1: [
                        'Abra de Ilog', 'Calintaan', 'Looc', 'Lubang', 
                        'Magsaysay', 'Mamburao', 'Paluan', 'Rizal', 
                        'Sablayan', 'San Jose', 'Santa Cruz'
                    ],                                 
                }
            },

            oriental_mindoro: {
                districts: {
                    1: [
                        'Baco', 'Bansud', 'Bongabong', 'Bulalacao', 
                        'Calapan', 'Gloria', 'Mansalay', 'Naujan', 
                        'Pinamalayan', 'Pola', 'Puerto Galera', 'Roxas', 
                        'San Teodoro', 'Socorro', 'Victoria'
                    ],                                           
                }
            },

            palawan: {
                districts: {
                    1: [
                        'Aborlan', 'Agutaya', 'Araceli', 'Balabac', 
                        'Bataraza', 'Brooke\'s Point', 'Busuanga', 'Cagayancillo', 
                        'Coron', 'Culion', 'Cuyo', 'Dumaran', 
                        'El Nido', 'Kalayaan', 'Linapacan', 'Magsaysay', 
                        'Narra', 'Quezon', 'Rizal', 'Roxas', 
                        'San Vicente', 'Sofronio Española', 'Taytay'
                    ],                    
                }
            },

            romblon: {
                districts: {
                    1: [
                        'Alcantara', 'Banton', 'Cajidiocan', 'Calatrava', 
                        'Concepcion', 'Corcuera', 'Ferrol', 'Looc', 
                        'Magdiwang', 'Odiongan', 'Romblon', 'San Agustin', 
                        'San Andres', 'San Fernando', 'San Jose', 'Santa Fe', 
                        'Santa Maria'
                    ],                                         
                }
            },        
        };



        // Event listener for region selection
        regionDropdown.addEventListener('change', function () {
            const selectedRegion = this.value;

            // Clear previous options
            municipalityDropdown.innerHTML = '<option value="">Select Municipality/City</option>';
            districtDropdown.innerHTML = '<option value="">Select District</option>';
            barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';
            districtDropdown.disabled = true;
            barangayDropdown.disabled = true;

            if (selectedRegion === 'barmm' || selectedRegion === 'car' || selectedRegion === 'calabarzon'
                || selectedRegion === 'ncr' || selectedRegion === 'mimaropa'
            ) {
                // Populate municipalities
                if (selectedRegion === 'barmm') {
                    Object.keys(barmmData).forEach(municipality => {
                        const option = document.createElement('option');
                        option.value = municipality;
                        option.textContent = municipality.replace('_', ' ').toUpperCase();
                        municipalityDropdown.appendChild(option);
                    });
                    municipalityDropdown.disabled = false;
                } 

                if (selectedRegion === 'car') {
                    Object.keys(carData).forEach(municipality => {
                        const option = document.createElement('option');
                        option.value = municipality;
                        option.textContent = municipality.replace('_', ' ').toUpperCase();
                        municipalityDropdown.appendChild(option);
                    });
                    municipalityDropdown.disabled = false;
                } 

                if (selectedRegion === 'calabarzon') {
                    Object.keys(calabarzonData).forEach(municipality => {
                        const option = document.createElement('option');
                        option.value = municipality;
                        option.textContent = municipality.replace('_', ' ').toUpperCase();
                        municipalityDropdown.appendChild(option);
                    });
                    municipalityDropdown.disabled = false;
                } 

                if (selectedRegion === 'ncr') {
                    Object.keys(ncrData).forEach(municipality => {
                        const option = document.createElement('option');
                        option.value = municipality;
                        option.textContent = municipality.replace('_', ' ').toUpperCase();
                        municipalityDropdown.appendChild(option);
                    });
                    municipalityDropdown.disabled = false;
                }

                if (selectedRegion === 'mimaropa') {
                    Object.keys(mimaropaData).forEach(municipality => {
                        const option = document.createElement('option');
                        option.value = municipality;
                        option.textContent = municipality.replace('_', ' ').toUpperCase();
                        municipalityDropdown.appendChild(option);
                    });
                    municipalityDropdown.disabled = false;
                } 
            } else {
                municipalityDropdown.disabled = true;
            }
        });

        // Event listener for municipality selection
        municipalityDropdown.addEventListener('change', function () {
            const selectedMunicipality = this.value;

            // Clear previous district and barangay options
            districtDropdown.innerHTML = '<option value="">Select District</option>';
            barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';
            barangayDropdown.disabled = true;

            const selectedRegion = regionDropdown.value; // Get selected region from regionDropdown

            if (barmmData[selectedMunicipality] || ncrData[selectedMunicipality] || carData[selectedMunicipality]
                || calabarzonData[selectedMunicipality] || mimaropaData[selectedMunicipality]
            ) {
                // Populate districts for the selected municipality
                if (selectedRegion === 'barmm') {
                    Object.keys(barmmData[selectedMunicipality].districts).forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district.toUpperCase();
                        districtDropdown.appendChild(option);
                    });
                    districtDropdown.disabled = false;
                }

                if (selectedRegion === 'car') {
                    Object.keys(carData[selectedMunicipality].districts).forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district.toUpperCase();
                        districtDropdown.appendChild(option);
                    });
                    districtDropdown.disabled = false;
                }

                if (selectedRegion === 'calabarzon') {
                    Object.keys(calabarzonData[selectedMunicipality].districts).forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district.toUpperCase();
                        districtDropdown.appendChild(option);
                    });
                    districtDropdown.disabled = false;
                }

                if (selectedRegion === 'ncr') {
                    Object.keys(ncrData[selectedMunicipality].districts).forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district.toUpperCase();
                        districtDropdown.appendChild(option);
                    });
                    districtDropdown.disabled = false;
                }
                
                if (selectedRegion === 'mimaropa') {
                    Object.keys(mimaropaData[selectedMunicipality].districts).forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district.toUpperCase();
                        districtDropdown.appendChild(option);
                    });
                    districtDropdown.disabled = false;
                }

            } else {
                districtDropdown.disabled = true;
            }
        });

        // Event listener for district selection
        districtDropdown.addEventListener('change', function () {
            const selectedDistrict = this.value;
            const selectedMunicipality = municipalityDropdown.value;

            // Clear previous barangay options
            barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';

            const selectedRegion = regionDropdown.value; // Get selected region from regionDropdown

            if (barmmData[selectedMunicipality]?.districts[selectedDistrict] || 
                ncrData[selectedMunicipality]?.districts[selectedDistrict] || 
                carData[selectedMunicipality]?.districts[selectedDistrict] || 
                calabarzonData[selectedMunicipality]?.districts[selectedDistrict] || 
                mimaropaData[selectedMunicipality]?.districts[selectedDistrict]) {

                // Populate barangays for the selected district
                if (selectedRegion === 'barmm') {
                    barmmData[selectedMunicipality].districts[selectedDistrict].forEach(barangay => {
                        const option = document.createElement('option');
                        option.value = barangay;
                        option.textContent = barangay;
                        barangayDropdown.appendChild(option);
                    });
                    barangayDropdown.disabled = false;
                }

                if (selectedRegion === 'car') {
                    carData[selectedMunicipality].districts[selectedDistrict].forEach(barangay => {
                        const option = document.createElement('option');
                        option.value = barangay;
                        option.textContent = barangay;
                        barangayDropdown.appendChild(option);
                    });
                    barangayDropdown.disabled = false;
                }

                if (selectedRegion === 'calabarzon') {
                    calabarzonData[selectedMunicipality].districts[selectedDistrict].forEach(barangay => {
                        const option = document.createElement('option');
                        option.value = barangay;
                        option.textContent = barangay;
                        barangayDropdown.appendChild(option);
                    });
                    barangayDropdown.disabled = false;
                }

                if (selectedRegion === 'ncr') {
                    ncrData[selectedMunicipality].districts[selectedDistrict].forEach(barangay => {
                        const option = document.createElement('option');
                        option.value = barangay;
                        option.textContent = barangay;
                        barangayDropdown.appendChild(option);
                    });
                    barangayDropdown.disabled = false;
                }

                if (selectedRegion === 'mimaropa') {
                    mimaropaData[selectedMunicipality].districts[selectedDistrict].forEach(barangay => {
                        const option = document.createElement('option');
                        option.value = barangay;
                        option.textContent = barangay;
                        barangayDropdown.appendChild(option);
                    });
                    barangayDropdown.disabled = false;
                }
            } else {
                barangayDropdown.disabled = true;
            }
        });


    // Get the submit button by its ID
        document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Get the input fields that need to be checked
        let field1 = document.getElementById('truth'); 
        let field2 = document.getElementById('liability'); 
        let field3 = document.getElementById('first-name'); 
        let field4 = document.getElementById('last-name'); 
        let field5 = document.getElementById('middle-name'); 
        let field6 = document.getElementById('birthday'); 
        let field7 = document.getElementById('birthplace'); 
        let field8 = document.getElementById('age'); 
        let field9 = document.getElementById('email'); 
        let field10 = document.getElementById('phone'); 
        let field11 = document.getElementById('unit'); 
        let field12 = document.getElementById('bldg'); 
        let field13 = document.getElementById('street'); 

        // Check if the fields are filled or checked
        if (!field1.checked || !field2.checked || !field3.value.trim() || !field4.value.trim() || !field5.value.trim() 
            || !field6.value.trim() || !field7.value.trim() || !field8.value.trim() || !field9.value.trim()
            || !field10.value.trim()|| !field11.value.trim() || !field12.value.trim() || !field13.value.trim()
        ) {
            // If any field is not filled or checked, show a message and stop submission
            alert("Please check all required fields before submitting.");
        } else {
            // If all fields are filled/checked, ask for confirmation
            let isConfirmed = confirm("Are you sure you want to submit?");
            if (isConfirmed) {
                window.open(this.href, '_blank'); // Redirect if confirmed
            }
        }
    });
});


