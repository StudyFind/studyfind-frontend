// CUSTOM TYPES

export type URL = string;
// - must start with https://
// - must not have any whitespace

export type Email = string;
// - must contain an @ symbol
// - must not have any whitespace
// - must be entirely lower case

export type Phone = string;
// - must be exactly 10 characters long
// - must only include numeric characters
// - is assumed to be a US number with a +1 country code

export type Date = string;
// - must be formatted as YYYY-MM-DD

export type Timestamp = number;
// - must be an integer
// - must be a Unix Timestamp in milliseconds

export type UserID = string;
// - must be 28 case-sensitive alphanumeric characters

export type DocumentID = string;
// - must be 20 case-sensitive alphanumeric characters

export type Timezone =
  | "America/Adak"
  | "America/Anchorage"
  | "America/Boise"
  | "America/Chicago"
  | "America/Denver"
  | "America/Detroit"
  | "America/Indiana/Indianapolis"
  | "America/Indiana/Knox"
  | "America/Indiana/Marengo"
  | "America/Indiana/Petersburg"
  | "America/Indiana/Tell_City"
  | "America/Indiana/Vevay"
  | "America/Indiana/Vincennes"
  | "America/Indiana/Winamac"
  | "America/Juneau"
  | "America/Kentucky/Louisville"
  | "America/Kentucky/Monticello"
  | "America/Los_Angeles"
  | "America/Menominee"
  | "America/Metlakatla"
  | "America/New_York"
  | "America/Nome"
  | "America/North_Dakota/Beulah"
  | "America/North_Dakota/Center"
  | "America/North_Dakota/New_Salem"
  | "America/Phoenix"
  | "America/Sitka"
  | "America/Yakutat"
  | "Pacific/Honolulu";

// - must be one of ["America/Adak", "America/Anchorage", "America/Boise", "America/Chicago", "America/Denver", "America/Detroit", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Los_Angeles", "America/Menominee", "America/Metlakatla", "America/New_York", "America/Nome", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Phoenix", "America/Sitka", "America/Yakutat", "Pacific/Honolulu"]

export type Address = string;
// - must be a valid address from Google Places API

export type Latitude = number;
// - must be an integer or float
// - must be between -90 and +90

export type Longitude = number;
// - must be an integer or float
// - must be between -180 and +180

export type WeeklyOffset = number;
// - must be an integer
// - must be between 0 and 604800000

export type UserType = "RESEARCHER" | "PARTICIPANT";
// - must be one of ["RESEARCHER", "PARTICIPANT"]
