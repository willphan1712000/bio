<?php
    $g = SystemConfig::globalVariables();
    $logo = $g['img']['logo'];
?> <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Terms and Conditions</title><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><style>body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .logo {
            width: 100px;
            margin: 10px;
        }
        .logo > img {
            width: 100%;
            height: 100%;
        }
        .back {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 5px;
            right: 5px;
            margin: 10px;
            border-radius: 50%;
            background-color: #fff;
            padding: 20px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            text-decoration: none;
            color: #000;
        }
        #container {
            max-width: 700px;
            width: calc(100% - 40px);
            padding: 1rem;
            position: relative;
            background: linear-gradient(to right, red, purple);
            padding: 3px;
            margin: 20px;
            border-radius: 30px;
        }

        #paragraph {
            background: #fff;
            color: #000;
            padding: 2rem;
            border-radius: 30px;
        }
        .heading {
            margin-bottom: 10px;
            text-align: center;
        }</style><script src="/dist/universalc99ab0fbf8091608a4d8.js"></script></head><body><a class="back" href="/signup"><i class="fa-solid fa-arrow-left"></i></a><div class="logo"><img src="<?=$logo?>" alt="" draggable="false"></div><div id="container"><div id="paragraph"><h1 class="heading">Terms and Conditions</h1><div><h3>Ethics Statement:</h3><p>All students are responsible for knowing the information, policies and procedures outlined in the Kennesaw State University Codes of Conduct. The KSU Codes of Conduct include: the general Student Code of Conduct, the Residential Code of Conduct, and the Code of Academic Integrity. Kennesaw State University reserves the right to make changes to this code as necessary and once those changes are posted online, they are in effect. Students are encouraged to check online for the updated versions of all policies.</p></div><br><div><h3>Sexual Misconduct Policy:</h3><p>Kennesaw State University is committed to providing programs, activities, and educational environment free from all forms of sex discrimination. For more information click here. KSU issues this statement of policy to inform the community of the University's comprehensive plan addressing sexual misconduct, educational programs, and procedures that address sexual assault, domestic violence, dating violence, and stalking, whether the incident occurs on or off campus. This policy generally covers faculty, students, and staff of the University, as well as third-parties. Third parties include but are not limited to guests, vendors, contractors, retirees, and alumni</p></div><br><div><h3>Course Accessibility Statement (ADA Statement):</h3><p>Kennesaw State University provides program accessibility and reasonable accommodations for persons defined as disabled under Section 504 of the Rehabilitation Act of 1973 or the Americans with Disabilities Act of 1990 as amended. Students who require accommodation in facilities, services, programs or activities should contact the Assistant Director for Disabled Student Services to arrange an individual assistance plan. Accommodations may include classroom accessibility, modified computer equipment, disability-accessible parking, assistance with note-taking sign language interpreting or captioning services, class materials in alternate format, library and laboratory assistance, and other accommodations. Determination of appropriate accommodations to be provided will be based upon documentation of the disability. Members of the public who require specific accommodations in facilities, services, programs or activities should contact the office sponsoring the service, program or activity at least five days in advance to arrange individual accommodations. Eligible students deliver certification letters to faculty at the beginning of each semester identifying the accommodations approved for that student. Faculty members are also instructed that they must provide students with special needs appropriate accommodations in a timely manner. The Assistant Director for disAbled Student Support Services will work with faculty members to ensure that students receive appropriate accommodations. A student should notify Disabled Student Support Services in writing within two (2) days of any disagreement between the student and the faculty member if agreed upon academic adjustments are not provided in order to seek a resolution. A student who alleges discrimination on the basis of disability may file a grievance through the University's established grievance procedures. The following have been designated by the President of the University to provide assistance and ensure compliance with the ADA. Should a student require assistance or have further questions about the ADA, please contact either the ADA Compliance Officer for Students at 770- 423-6443; the ADA Compliance Officer for Facilities at 470-578-6224; or the Director of Human Resources, ADA Compliance Officer for staff and faculty at 470-578-2666.</p></div></div></div> <?php
        copyright([
            "position" => "relative"
        ])->render();
    ?> </body></html>