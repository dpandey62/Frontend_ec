import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import "./CountryDropdown.css";

// Transition Component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const countries = [
  "India",
  "Sri Lanka",
  "USA",
  "UK",
  "Canada",
  "India",
  "Sri Lanka",
  "USA",
  "UK",
  "Canada",
  "India",
  "Sri Lanka",
  "USA",
  "UK",
  "Canada",
];

const CountryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleClear = () => {
    setSelectedCountry("");
  };

  const handleSubmit = () => {
    alert(`Selected Country: ${selectedCountry}`);
    handleClose();
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Button className="countrydrop" onClick={handleOpen}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{selectedCountry || "None"}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      {/* Dialog Component */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition} // Correctly pass the TransitionComponent here
        className="location-dialog"
      >
        {/* Dialog Title */}
        <DialogTitle style={{ marginBottom: "0", paddingBottom: "5px" }}>
          Choose Your Delivery Location
          {/* Close Button */}
          <Button
            className="close_"
            onClick={handleClose} // Correctly closing the dialog using `setOpen(false)`
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              minWidth: "auto",
              padding: "5px",
            }}
          >
            <IoMdClose />
          </Button>
        </DialogTitle>

        {/* Dialog Content */}
        <DialogContent>
          <p>Enter your address and we will specify offers for your location.</p>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Enter Your Address"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="search"
            label="Search Country"
            type="text"
            fullWidth
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-3"
          />
          <List className="countryList">
            {filteredCountries.map((country, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleCountrySelect(country)}>
                  <ListItemText primary={country} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>

        {/* Dialog Actions */}
        <DialogActions>
          <Button onClick={handleClear} color="secondary">
            Clear
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
