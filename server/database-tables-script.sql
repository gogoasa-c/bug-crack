-- Create the 'Users' table to store information about users
CREATE TABLE Users (
    ID INT PRIMARY KEY,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR2(255) UNIQUE NOT NULL
);

-- Create the 'User_Projects' table to represent the relationship between users and projects, managing the many to many (n-n) relationship
-- Note: User_Type is actually a permission level for the project it binds to
CREATE TABLE User_Projects (
    User_ID INT REFERENCES Users(ID),
    Project_ID INT REFERENCES Projects(ID),
    User_Type VARCHAR(3) CHECK (UserType IN ('PM', 'TST')) NOT NULL,
    PRIMARY KEY (UserID, ProjectID)
);

-- Create the 'Projects' table to store information about software projects
CREATE TABLE Projects (
    ID INT PRIMARY KEY,
    Description TEXT NOT NULL,
    Repository VARCHAR(255) NOT NULL,
    Team_ID INT REFERENCES 'Teams(ID) NOT NULL
);

-- Create the 'Teams' table to store information about the teams
CREATE TABLE Teams (
    ID INT PRIMARY KEY,
    Name VARCHAR(255) UNIQUE NOT NULL
);

-- Create the 'Team_Users' table to represent the relationship between users and teams, managing the many to many (n-n) relationship
CREATE TABLE Team_Users (
    User_ID INT REFERENCES Users(ID),
    Team_ID INT REFERENCES Teams(ID),
    PRIMARY KEY (User_ID, Team_ID)
);

-- Create the 'Bugs' table to store information about registered bugs
CREATE TABLE Bugs (
    ID INT PRIMARY KEY,
    Severity VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    Commit_Link VARCHAR(255) NOT NULL,
    Project_ID INT REFERENCES Projects(ID) NOT NULL,
    User_ID INT REFERENCES Users(ID) NULL,
    Status VARCHAR(255) NULL,
);