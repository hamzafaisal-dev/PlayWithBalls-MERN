import React, { useState } from "react";
import "./style.css";
import "./slots-sidebar.css";
import { FilterList } from "@mui/icons-material";
import { SlotsInfo } from "../Slots";

export const GroundsSidebar = ({ onFilter }) => {
  const [area, setArea] = useState(undefined);
  const [type, setType] = useState(undefined);

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleFilterClick = () => {
    const filters = { area, type };
    onFilter(filters);
  };

  const handleRemoveFilterClick = () => {
    setArea(undefined);
    setType(undefined);
    const filters = { area: undefined, type: undefined };
    onFilter(filters);
  };

  return (
    <div className="grounds-sidebar">
      <h2 className="sidebar-heading"></h2>
      <div className="sidebar-section">
        <FilterList fontSize="small" />
        <h3 className="sidebar-subheading">
          <FilterList fontSize="small" style={{ marginRight: "5px" }} />
          Filter by area
        </h3>
        <select
          className="sidebar-dropdown"
          value={area}
          onChange={handleAreaChange}
        >
          <option>Select an area</option>
          <option value={"Abbas Town"}>Abbas Town</option>
          <option value={"Abbasi Shaheed"}>Abbasi Shaheed</option>
          <option value={"Abdul Rehman Goth"}>Abdul Rehman Goth</option>
          <option value={"Abdullah Goth"}>Abdullah Goth</option>
          <option value={"Abidabad"}>Abidabad</option>
          <option value={"Abu Zar Ghaffari"}>Abu Zar Ghaffari</option>
          <option value={"Abyssinia Lines"}>Abyssinia Lines</option>
          <option value={"Afridi Colony"}>Afridi Colony</option>
          <option value={"Agra Taj Colony"}>Agra Taj Colony</option>
          <option value={"Ahsanabad"}>Ahsanabad</option>
          <option value={"Aisha Manzil"}>Aisha Manzil</option>
          <option value={"Akhtar Colony"}>Akhtar Colony</option>
          <option value={"Al-Falah Society"}>Al-Falah Society</option>
          <option value={"Allama Iqbal Colony"}>Allama Iqbal Colony</option>
          <option value={"Ancholi"}>Ancholi</option>
          <option value={"Arbian"}>Arbian</option>
          <option value={"Azam Basti"}>Azam Basti</option>
          <option value={"Azizabad"}>Azizabad</option>
          <option value={"Baba and Bhit Islands"}>Baba and Bhit Islands</option>
          <option value={"Baghdadi"}>Baghdadi, Karachi</option>
          <option value={"Bahadurabad"}>Bahadurabad</option>
          <option value={"Baldia Colony"}>Baldia Colony</option>
          <option value={"Baloch Colony"}>Baloch Colony</option>
          <option value={"Baloch Goth"}>Baloch Goth</option>
          <option value={"Banaras Colony"}>Banaras Colony</option>
          <option value={"Bandhani Colony"}>Bandhani Colony</option>
          <option value={"Bath Island"}>Bath Island</option>
          <option value={"Bhawani Chali"}>Bhawani Chali</option>
          <option value={"Bhittai Colony"}>Bhittai Colony</option>
          <option value={"Bhutta Village"}>Bhutta Village</option>
          <option value={"Bihar Colony"}>Bihar Colony</option>
          <option value={"Bilal Colony"}>Bilal Colony</option>
          <option value={"Bismillah Chowk"}>Bismillah Chowk</option>
          <option value={"Buffer Zone"}>Buffer Zone, Karachi</option>
          <option value={"Burmee Colony"}>Burmee Colony</option>
          <option value={"Catholic Colony"}>Catholic Colony</option>
          <option value={"Cattle Colony"}>Cattle Colony</option>
          <option value={"Central Jacob Lines"}>Central Jacob Lines</option>
          <option value={"Chakiwara"}>Chakiwara</option>
          <option value={"Chakra Goth"}>Chakra Goth</option>
          <option value={"Chanesar Town"}>Chanesar Town</option>
          <option value={"Chisti Nagar"}>Chisti Nagar</option>
          <option value={"Chittagong Colony"}>Chittagong Colony</option>
          <option value={"Cincinnatus Town"}>Cincinnatus Town</option>
          <option value={"City Railway Colony"}>City Railway Colony</option>
          <option value={"Civil Lines"}>Civil Lines</option>
          <option value={"Clifton"}>Clifton</option>
          <option value={"Dak Khana"}>Dak Khana</option>
          <option value={"Darakhshan"}>Darakhshan</option>
          <option value={"Darsano Chana"}>Darsano Chana</option>
          <option value={"Darvesh Goth"}>Darvesh Goth</option>
          <option value={"Daryaabad"}>Daryaabad</option>
          <option value={"Dastagir"}>Dastagir</option>
          <option value={"Dastagir Colony"}>Dastagir Colony</option>
          <option value={"Data Nagar"}>Data Nagar</option>
          <option value={"DHA Phase 1"}>DHA Phase 1</option>
          <option value={"DHA Phase 2"}>DHA Phase 2</option>
          <option value={"DHA Phase 3"}>DHA Phase 3</option>
          <option value={"DHA Phase 4"}>DHA Phase 4</option>
          <option value={"DHA Phase 5"}>DHA Phase 5</option>
          <option value={"DHA Phase 6"}>DHA Phase 6</option>
          <option value={"DHA Phase 7"}>DHA Phase 7</option>
          <option value={"DHA Phase 8"}>DHA Phase 8</option>
          <option value={"Defence View"}>Defence View</option>
          <option value={"Delhi Colony"}>Delhi Colony</option>
          <option value={"DHA City"}>DHA City</option>
          <option value={"Dhoraji Colony"}>Dhoraji Colony</option>
          <option value={"Drigh Colony"}>Drigh Colony</option>
          <option value={"Essa Nagri"}>Essa Nagri</option>
          <option value={"Faisal Colony"}>Faisal Colony</option>
          <option value={"Farooq-e-Azam"}>Farooq-e-Azam</option>
          <option value={"Fatima Jinnah Colony"}>Fatima Jinnah Colony</option>
          <option value={"Federal B. Area"}>Federal B. Area</option>
          <option value={"Firdous Colony"}>Firdous Colony</option>
          <option value={"Firozabad"}>Firozabad</option>
          <option value={"Frontier Colony"}>Frontier Colony</option>
          <option value={"Gabo Pat"}>Gabo Pat</option>
          <option value={"Gabol Colony"}>Gabol Colony</option>
          <option value={"Gadap"}>Gadap</option>
          <option value={"Garden East"}>Garden East</option>
          <option value={"Garden West"}>Garden West</option>
          <option value={"Ghanchi Para"}>Ghanchi Para</option>
          <option value={"Gharibabad"}>Gharibabad</option>
          <option value={"Ghausia Colony"}>Ghausia Colony</option>
          <option value={"Ghaziabad"}>Ghaziabad</option>
          <option value={"Gizri"}>Gizri</option>
          <option value={"Godhra"}>Godhra</option>
          <option value={"Golimar"}>Golimar</option>
          <option value={"Green Park City"}>Green Park City</option>
          <option value={"Gujrat Colony"}>Gujrat Colony</option>
          <option value={"Gulbahar"}>Gulbahar</option>
          <option value={"Gulistan-e-Johar"}>Gulistan-e-Johar</option>
          <option value={"Gulistan-e-Zafar"}>Gulistan-e-Zafar</option>
          <option value={"Gulshan-e-Amna"}>Gulshan-e-Amna</option>
          <option value={"Gulshan-e-Ghazi"}>Gulshan-e-Ghazi</option>
          <option value={"Gulshan-e-Iqbal"}>Gulshan-e-Iqbal</option>
          <option value={"Gulshan-e-Maymar"}>Gulshan-e-Maymar</option>
          <option value={"Gulshan-e-Osman"}>Gulshan-e-Osman</option>
          <option value={"Gulshan-e-Saeed"}>Gulshan-e-Saeed</option>
          <option value={"Gulshan-e-Sheraz"}>Gulshan-e-Sheraz</option>
          <option value={"Gulzar Colony"}>Gulzar Colony</option>
          <option value={"Gulzar-e-Hijri"}>Gulzar-e-Hijri</option>
          <option value={"Haji Ali Goth"}>Haji Ali Goth</option>
          <option value={"Haji Camp"}>Haji Camp</option>
          <option value={"Hakim Ahsan"}>Hakim Ahsan</option>
          <option value={"Hanifabad"}>Hanifabad</option>
          <option value={"Haroonabad"}>Haroonabad</option>
          <option value={"Haryana Colony"}>Haryana Colony</option>
          <option value={"Hawke's Bay Town"}>Hawke's Bay Town</option>
          <option value={"Hijrat Colony"}>Hijrat Colony</option>
          <option value={"Hundred Quarters"}>Hundred Quarters</option>
          <option value={"Hussainabad"}>Hussainabad</option>
          <option value={"Hyderabad Colony"}>Hyderabad Colony</option>
          <option value={"Hyderi"}>Hyderi</option>
          <option value={"Ibrahim Hyderi"}>Ibrahim Hyderi</option>
          <option value={"Islam Pura"}>Islam Pura</option>
          <option value={"Islamia Colony"}>Islamia Colony</option>
          <option value={"Ittehad Town"}>Ittehad Town</option>
          <option value={"Jafar-e-Tayyar"}>Jafar-e-Tayyar</option>
          <option value={"Jamali Colony"}>Jamali Colony</option>
          <option value={"Jamshed Quarters"}>Jamshed Quarters</option>
          <option value={"Junaid Nagar"}>Junaid Nagar</option>
          <option value={"Kakapir"}>Kakapir</option>
          <option value={"Kala Board"}>Kala Board</option>
          <option value={"Karachi Creek Marina"}>Karachi Creek Marina</option>
          <option value={"Karimabad"}>Karimabad</option>
          <option value={"Keamari"}>Keamari</option>
          <option value={"Kehkashan"}>Kehkashan</option>
          <option value={"Khamiso Goth"}>Khamiso Goth</option>
          <option value={"Khandu Goth"}>Khandu Goth</option>
          <option value={"Kharadar"}>Kharadar</option>
          <option value={"Khoso Goth"}>Khoso Goth</option>
          <option value={"Kokan Colony"}>Kokan Colony</option>
          <option value={"Korangi"}>Korangi</option>
          <option value={"Korangi J Area"}>Korangi J Area</option>
          <option value={"Korangi Sector 33"}>Korangi Sector 33</option>
          <option value={"Landhi Colony"}>Landhi Colony</option>
          <option value={"Lasbela (Karachi)"}>Lasbela (Karachi)</option>
          <option value={"Liaquatabad"}>Liaquatabad</option>
          <option value={"Lyari"}>Lyari</option>
          <option value="Machar Colony">Machar Colony</option>
          <option value="Madina Colony, New Karachi Town">
            Madina Colony, New Karachi Town
          </option>
          <option value="Madina Colony, Orangi Town">
            Madina Colony, Orangi Town
          </option>
          <option value="Madrasi Para">Madrasi Para</option>
          <option value="Mahmudabad">Mahmudabad</option>
          <option value="Manghopir">Manghopir</option>
          <option value="Manora, Karachi">Manora, Karachi</option>
          <option value="Manzoor Colony">Manzoor Colony</option>
          <option value="Maripur">Maripur</option>
          <option value="Masroor Colony">Masroor Colony</option>
          <option value="Maymarabad">Maymarabad</option>
          <option value="Mehran Town">Mehran Town</option>
          <option value="Metroville">Metroville</option>
          <option value="Metroville Colony">Metroville Colony</option>
          <option value="Millat Nagar">Millat Nagar</option>
          <option value="Mithadar">Mithadar</option>
          <option value="Model Colony">Model Colony</option>
          <option value="Mohammad Nagar">Mohammad Nagar</option>
          <option value="Moinabad">Moinabad</option>
          <option value="Mominabad">Mominabad</option>
          <option value="Moosa Colony">Moosa Colony</option>
          <option value="Moosa Lane">Moosa Lane</option>
          <option value="Moria Khan Goth">Moria Khan Goth</option>
          <option value="Mubarak Goth">Mubarak Goth</option>
          <option value="Muhajir Camp">Muhajir Camp</option>
          <option value="Mujahid Colony">Mujahid Colony</option>
          <option value="Mujahidabad">Mujahidabad</option>
          <option value="Mula Essa Goth">Mula Essa Goth</option>
          <option value="Murad Memon Goth">Murad Memon Goth</option>
          <option value="Muslim Town">Muslim Town</option>
          <option value="Mustafa Taj Colony">Mustafa Taj Colony</option>
          <option value="Nai Abadi">Nai Abadi</option>
          <option value="Nanak Wara">Nanak Wara</option>
          <option value="Narayan Pura">Narayan Pura</option>
          <option value="Naseerabad">Naseerabad</option>
          <option value="Nasir Colony">Nasir Colony</option>
          <option value="Natha Khan Goth">Natha Khan Goth</option>
          <option value="Naval Colony">Naval Colony</option>
        </select>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-subheading">
          <FilterList fontSize="small" style={{ marginRight: "5px" }} />
          Filter by type
        </h3>
        <div className="sidebar-radio-group">
          <label>
            <input
              type="radio"
              value="grass"
              checked={type === "grass"}
              onChange={handleTypeChange}
            />
            Grass
          </label>
          <label>
            <input
              type="radio"
              value="court"
              checked={type === "court"}
              onChange={handleTypeChange}
            />
            Court
          </label>
        </div>
      </div>
      <button className="sidebar-filter-button" onClick={handleFilterClick}>
        Filter
      </button>
      <button
        className="sidebar-clear-filter-button"
        onClick={handleRemoveFilterClick}
      >
        Remove Filters
      </button>
    </div>
  );
};

export const SlotsSidebar = () => {
  return (
    <div className="selection-sidebar">
      <h2 className="selection-sidebar-heading">Selection details</h2>
      <div className="selection-sidebar-section">
        <h3 className="selection-sidebar-subtotal">Subtotal: PKR 0.00</h3>
        {/* <div className="sidebar-divider"></div> */}
        <div className="selection-sidebar-divider"></div>
        <h3 className="selection-sidebar-times-heading">Chosen times</h3>
        {/* {<SlotsInfo />} */}
        <div className="selection-sidebar-divider"></div>
        <button className="selection-sidebar-add-button">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};
