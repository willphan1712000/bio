<?php

use config\SystemConfig;

$g = SystemConfig::globalVariables();

require_once __DIR__ . "/../controllers/components/Logo.php";

use function component\logo;

require_once __DIR__ . "/../controllers/components/Copyright.php";

use function component\copyright;

require_once __DIR__ . "/../controllers/components/signup/SignupTerms.php";

use function component\signup\signupTerms;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms and Conditions</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script>
</head>

<body class="flex justify-center items-center flex-col">
    <?= signupTerms()->render(); ?>
    <div class="m-2.5">
        <?= logo(["src" => $g["img"]["logo"]])->render(); ?>
    </div>
    <div id="container" class="max-w-[700px] relative bg-gradient-to-r from-red-500 to-purple-500 p-[3px] m-[20px] rounded-[30px]" style="width: calc(100% - 40px)">
        <div id="paragraph" class="bg-white text-black p-[2rem] rounded-[30px]">
            <h1 class="text-4xl mb-[10px] text-center">Terms and Conditions</h1>
            <div>
                <h3 class="text-xl">User Responsibilities</h3>
                <p>Users of <?= $g['product_name']; ?> are expected to conduct themselves responsibly and adhere to all applicable laws and regulations. By using <?= $g['product_name']; ?>, you agree not to post, upload, share, or transmit any content that:
                <ul class="pl-[15px]">
                    <li>Sexual Content: Contains or promotes explicit sexual content, nudity, pornography, or any material that is sexually suggestive or intended to be sexually gratifying.</li>

                    <li>Violence: Incites or promotes violence, threats, or any form of physical harm against any person or group, including content that glorifies or trivializes violent acts or promotes self-harm.</li>

                    <li>Hate Speech & Discrimination: Promotes or incites hate speech, harassment, discrimination, or violence against individuals or groups based on race, ethnicity, nationality, religion, disability, gender, gender identity, sexual orientation, or age.</li>

                    <li>Religion: Promotes religious intolerance, disparages religious beliefs, or is intended to provoke or offend based on religious affiliations or practices.</li>

                    <li>Illegal Activities: Contains, promotes, or encourages illegal activities, including but not limited to, drug use, human trafficking, child exploitation, or any other activities prohibited by law.</li>

                    <li>Misinformation & Deceptive Content: Spreads false or misleading information, including but not limited to, fake news, fraudulent schemes, or any other deceptive practices intended to mislead users or cause harm.</li>

                    <li>Malware & Phishing: Includes links, files, or software that contain viruses, malware, or other harmful components designed to damage, disrupt, or gain unauthorized access to data or systems.</li>

                    <li>Children are prohibited from sharing personal information on our product, and we monitor interactions to ensure safety, removing inappropriate content and suspending offending accounts. Parents and children are encouraged to report any concerns immediately.</li>
                </ul>
                </p>
            </div>
            <br>
            <div>
                <h3 class="text-xl">Enforcement & Consequences</h3>
                <p> <?= $g['product_name']; ?> reserves the right to remove any content that violates these terms and conditions without prior notice. Users who repeatedly or egregiously violate these rules may have their accounts suspended or permanently banned from using <?= $g['product_name']; ?>. Additionally, <?= $g['product_name']; ?> may report illegal activities to the appropriate law enforcement authorities.</p>
            </div>
            <br>
            <div>
                <h3 class="text-xl">Reporting Violations</h3>
                <p>If you encounter any content that you believe violates these terms and conditions, please report it to us immediately using the reporting tools provided within <?= $g['product_name']; ?> or by contacting our support team at <strong><a href="mailto: <?= $g['ownerEmail']; ?>"><?= $g['ownerEmail']; ?></a></strong>.</p>
            </div>
            <br>
            <div>
                <h3 class="text-xl">Amendments to These Terms</h3>
                <p> <?= $g['product_name']; ?> reserves the right to amend these terms and conditions at any time. Users will be notified of significant changes, and continued use of <?= $g['product_name']; ?> after changes are made constitutes acceptance of the updated terms.</p>
            </div>
        </div>
    </div>
    <?php
    copyright([
        "position" => "relative"
    ])->render();
    ?>
</body>

</html>