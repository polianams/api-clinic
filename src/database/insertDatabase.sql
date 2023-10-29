INSERT INTO
    "Specialties" (specialty, value)
VALUES ('Cardiology', 50000), ('Dermatology', 40000), ('Endocrinology', 45000), ('Gastroenterology', 55000), ('Gynecology', 40000), ('Neurology', 50000), ('Ophthalmology', 60000), ('Orthopedics', 45000), ('Pediatrics', 35000), ('Psychiatry', 55000), ('Radiology', 60000), ('Urology', 50000);

INSERT INTO
    "Doctors" (
        name,
        email,
        "specialtyId",
        status
    )
VALUES (
        'Dr. John Doe',
        'johndoe@example.com',
        1,
        true
    ), (
        'Dr. Jane Smith',
        'janesmith@example.com',
        2,
        true
    ), (
        'Dr. Michael Johnson',
        'michaeljohnson@example.com',
        3,
        false
    ), (
        'Dr. Sarah Williams',
        'sarahwilliams@example.com',
        1,
        true
    ), (
        'Dr. Robert Garcia',
        'robertgarcia@example.com',
        4,
        true
    ), (
        'Dr. Lisa Davis',
        'lisadavis@example.com',
        2,
        false
    ), (
        'Dr. Mark Anderson',
        'markanderson@example.com',
        3,
        true
    ), (
        'Dr. Jennifer Martinez',
        'jennifermartinez@example.com',
        5,
        true
    ), (
        'Dr. William Rodriguez',
        'williamrodriguez@example.com',
        4,
        false
    ), (
        'Dr. Emily Brown',
        'emilybrown@example.com',
        5,
        true
    );

INSERT INTO
    "public"."Patients" (name, email, password)
VALUES (
        'John Doe',
        'johndoe@example.com',
        'secretpassword123'
    ), (
        'Jane Smith',
        'janesmith@example.com',
        'password456'
    ), (
        'Michael Johnson',
        'michaeljohnson@example.com',
        'securepass789'
    );