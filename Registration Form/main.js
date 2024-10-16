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

    // Event listener for region selection
    regionDropdown.addEventListener('change', function () {
        const selectedRegion = this.value;

        // Clear previous options
        municipalityDropdown.innerHTML = '<option value="">Select Municipality/City</option>';
        districtDropdown.innerHTML = '<option value="">Select District</option>';
        barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';
        districtDropdown.disabled = true;
        barangayDropdown.disabled = true;

        if (selectedRegion === 'ncr') {
            // Populate municipalities for NCR
            Object.keys(ncrData).forEach(municipality => {
                const option = document.createElement('option');
                option.value = municipality;
                option.textContent = municipality.replace('_', ' ').toUpperCase();
                municipalityDropdown.appendChild(option);
            });
            municipalityDropdown.disabled = false;
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

        if (ncrData[selectedMunicipality]) {
            // Populate districts for the selected municipality
            Object.keys(ncrData[selectedMunicipality].districts).forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district.toUpperCase();
                districtDropdown.appendChild(option);
            });
            districtDropdown.disabled = false;
        } else {
            districtDropdown.disabled = true;
        }
    });

    // Event listener for district selection
    districtDropdown.addEventListener('change', function () {
        const selectedMunicipality = municipalityDropdown.value;
        const selectedDistrict = this.value;

        // Clear previous barangay options
        barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';

        if (ncrData[selectedMunicipality].districts[selectedDistrict]) {
            // Populate barangays for the selected district
            ncrData[selectedMunicipality].districts[selectedDistrict].forEach(barangay => {
                const option = document.createElement('option');
                option.value = barangay;
                option.textContent = barangay;
                barangayDropdown.appendChild(option);
            });
            barangayDropdown.disabled = false;
        } else {
            barangayDropdown.disabled = true;
        }
    });
});
