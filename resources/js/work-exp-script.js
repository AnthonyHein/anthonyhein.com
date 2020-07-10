$(document).ready(function() {
    console.log("Script loaded.");
    
    $("#KR-Div").hover(function(){
        $("#KR").show();
        $("#KR-Pic").fadeTo(300, 0.05);
        $("#work-exp-box").html(`<b>More information will be added here as the internship progresses.</b>`);
        }, function() {
        $("#KR").hide();
        $("#KR-Pic").fadeTo(300, 1);
    });
    
    $("#PW-Div").hover(function(){
        $("#PW").show();
        $("#PW-Pic").fadeTo(300, 0.05);
        $("#work-exp-box").html( `<ul class="ul">
                                    <li class="li">
                                        Integrated <b>Microsoft SSRS</b> into DELMIA Apriso to enable real-time reporting on shop floor operations with technology that coworkers were familiar with (vs. niche Apriso reporting services).
                                    </li>
                                    <li class="li">
                                        Proposed simpler, low-power alternatives to the current inefficient PLCs used on the shop floor.
                                    </li>
                                    <li class="li">
                                        Used United Technologies Corp workflow software to automate service request emails to save <b>$500</b> annually.
                                    </li>
                                    <li class="li">
                                        Wrote 10 <b>SQL</b> scripts to automate data transformation from manually maintained <b>Excel</b> sheets to <b>Oracle PL/SQL</b> tables that were used by company scheduling software, saving <b>$1000</b> annually.
                                    </li>
                                </ul>`);
        }, function() {
        $("#PW").hide();
        $("#PW-Pic").fadeTo(300, 1);
    });
     
    $("#Peer-Div").hover(function(){
        $("#Peer").show();
        $("#Peer-Pic").fadeTo(300, 0.05);
        $("#work-exp-box").html( `<ul class="ul">
                                        <li class="li">
                                            Provide one-on-one personalized <b>on-call tutoring</b> in COS226: Algorithms and Data Structures.
                                        </li>
                                        <li class="li">
                                            Helped students understand difficult <b>algorithmic concepts</b> presented in class.
                                        </li>
                                        <li class="li">
                                            Walked students through all stages of programming, from brainstorming to debugging. 
                                        </li>
                                    </ul>`);
        }, function() {
        $("#Peer").hide();
        $("#Peer-Pic").fadeTo(300, 1);
    });
    
    $("#Lab-Div").hover(function(){
        $("#Lab").show();
        $("#Lab-Pic").fadeTo(300, 0.05);
        $("#work-exp-box").html( `<ul class="ul">
                                        <li class="li">
                                            Help students in introductory programming courses <b>quickly debug code</b> through office-hour-like sessions.
                                        </li>
                                        <li class="li">
                                            Upheld my responsibilities during the COVID-19 pandemic through use of Zoom.
                                        </li>
                                        <li class="li">
                                            Needed strong command of <b>C</b>, <b>Java</b>, and <b>ARMv8</b>.
                                        </li>
                                    </ul>`);
        }, function() {
        $("#Lab").hide();
        $("#Lab-Pic").fadeTo(300, 1);
    });
    
});