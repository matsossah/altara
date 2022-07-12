import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useTranslation } from "react-i18next";

const PlacesAutocomplete = (props) => {
  const { t } = useTranslation();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      console.log(description);
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
        props.onAddressChange(results[0]["formatted_address"]);

        results[0]["address_components"].forEach((addressItem) => {
          if (addressItem["types"][0] === "country") {
            props.onCountryChange(addressItem["long_name"]);
          } else if (addressItem["types"][0] === "postal_code") {
            props.onZipChange(addressItem["long_name"]);
          } else if (addressItem["types"][0] === "locality") {
            props.onCityChange(addressItem["long_name"]);
          }
          return;
        });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="places mb-2"
        >
          <strong className="zona is-size-6">{main_text}</strong>{" "}
          <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div className="field">
      <div className="control">
        <div ref={ref}>
          <input
            className="input"
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder={t("checkout.address")}
          />
          {/* We can use the "status" to decide whether we should display the dropdown or not */}
          {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
      </div>
    </div>
  );
};

export default PlacesAutocomplete;
