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
        }
        .list {
            padding-left: 15px;
        }</style><script src="/dist/universala65ac2dbc01a46adc0ce.js"></script></head><body><a class="back" href="/signup"><i class="fa-solid fa-arrow-left"></i></a><div class="logo"><img src="<?=$logo."?v=".time()?>" alt="" draggable="false"></div><div id="container"><div id="paragraph"><h1 class="heading">Terms and Conditions</h1><div><h3>User Responsibilities</h3><p>Users of <?=$g['product_name'];?> are expected to conduct themselves responsibly and adhere to all applicable laws and regulations. By using <?=$g['product_name'];?>, you agree not to post, upload, share, or transmit any content that:</p><ul class="list"><li>Sexual Content: Contains or promotes explicit sexual content, nudity, pornography, or any material that is sexually suggestive or intended to be sexually gratifying.</li><li>Violence: Incites or promotes violence, threats, or any form of physical harm against any person or group, including content that glorifies or trivializes violent acts or promotes self-harm.</li><li>Hate Speech & Discrimination: Promotes or incites hate speech, harassment, discrimination, or violence against individuals or groups based on race, ethnicity, nationality, religion, disability, gender, gender identity, sexual orientation, or age.</li><li>Religion: Promotes religious intolerance, disparages religious beliefs, or is intended to provoke or offend based on religious affiliations or practices.</li><li>Illegal Activities: Contains, promotes, or encourages illegal activities, including but not limited to, drug use, human trafficking, child exploitation, or any other activities prohibited by law.</li><li>Misinformation & Deceptive Content: Spreads false or misleading information, including but not limited to, fake news, fraudulent schemes, or any other deceptive practices intended to mislead users or cause harm.</li><li>Malware & Phishing: Includes links, files, or software that contain viruses, malware, or other harmful components designed to damage, disrupt, or gain unauthorized access to data or systems.</li></ul><p></p></div><br><div><h3>Enforcement & Consequences</h3><p> <?=$g['product_name'];?> reserves the right to remove any content that violates these terms and conditions without prior notice. Users who repeatedly or egregiously violate these rules may have their accounts suspended or permanently banned from using <?=$g['product_name'];?>. Additionally, <?=$g['product_name'];?> may report illegal activities to the appropriate law enforcement authorities.</p></div><br><div><h3>Reporting Violations</h3><p>If you encounter any content that you believe violates these terms and conditions, please report it to us immediately using the reporting tools provided within <?=$g['product_name'];?> or by contacting our support team at tonthang@icloud.com.</p></div><br><div><h3>Amendments to These Terms</h3><p> <?=$g['product_name'];?> reserves the right to amend these terms and conditions at any time. Users will be notified of significant changes, and continued use of <?=$g['product_name'];?> after changes are made constitutes acceptance of the updated terms.</p></div></div></div> <?php
        copyright([
            "position" => "relative"
        ])->render();
    ?> </body></html>