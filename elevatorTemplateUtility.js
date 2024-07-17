function createElevatorTemplate(elevatorName) {
    const elevatorEle = document.createElement("div");
    elevatorEle.classList.add(elevatorName);
    elevatorEle.classList.add("elevator-sub-container");
    const elevatorFixedTemplate =
            `<section class="floors-section">
                <div class="section-header"> Floors </div>
                <div class="floor-numbers">
                    <div class="floor"> 
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no">
                                0
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="0" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor"> 
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                1
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="1" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                2
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="2" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                3
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="3" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                4
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="4" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                5
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="5" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                6
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="6" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                7
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="7" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                8
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="8" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                9
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="9" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                                <i class="fa-solid fa-up-long" data-request-direction="UP"></i>
                            </div>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ELEVATOR-ID-outer-display-section elevator-outer-display-section">
                            <div class="ELEVATOR-ID-outer-display-details elevator-outer-display-details">
                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-down-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>
                            </div>

                            <div class="ELEVATOR-ID-floor-no elevator-duct-floor-no ">
                                10
                            </div>

                            <div class="ELEVATOR-ID-outer-display-buttons elevator-outer-display-buttons" data-request-at-floor="10" onclick="outsideInterfaceButtonClicked(event)" >
                                <i class="fa-solid fa-down-long" data-request-direction="DOWN"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="elevator-section">
                <div class="section-header"> ELEVATOR-ID </div>
                <div class="elevator-duct" data-elevator-name="ELEVATOR-ID">
                    <div class="elevator-space-on-floor ELEVATOR-ID-space current-elevator-floor-duct" 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="0" data-elevator-name="ELEVATOR-ID">
                        <div class="elevator ELEVATOR-ID closed-door-elevator">
                            <div class="ELEVATOR-ID-interface-display-section elevator-interface-display-section">
                                <div class="ELEVATOR-ID-current-direction elevator-current-direction">
                                    <i class="fa-solid fa-up-long"></i>
                                </div>
                                <div class="ELEVATOR-ID-current-status elevator-current-status">
                                    <!-- <i class="fa-solid fa-bolt-lightning"></i> -->
                                    <i class="fa-solid fa-hourglass-end"></i>
                                </div>

                                <div class="ELEVATOR-ID-current-floor-no elevator-current-floor-no">
                                    0
                                </div>
                            </div>
                            <div class="elevator-interface-section ELEVATOR-ID-interface">
                                <button class="btn" data-requested-floor-no="0">0</button>
                                <button class="btn" data-requested-floor-no="1">1</button>
                                <button class="btn" data-requested-floor-no="2">2</button>
                                <button class="btn" data-requested-floor-no="3">3</button>
                                <button class="btn" data-requested-floor-no="4">4</button>
                                <button class="btn" data-requested-floor-no="5">5</button>
                                <button class="btn" data-requested-floor-no="6">6</button>
                                <button class="btn" data-requested-floor-no="7">7</button>
                                <button class="btn" data-requested-floor-no="8">8</button>
                                <button class="btn" data-requested-floor-no="9">9</button>
                                <button class="btn" data-requested-floor-no="10">10</button>
                                <button class="btn" data-requested-floor-no="<>"><></button>
                                <button class="btn" data-requested-floor-no="><">><</button>
                            </div>
                        </div>
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space" 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="1" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="2" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="3" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="4" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="5" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="6" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="7" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="8" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="9" data-elevator-name="ELEVATOR-ID">
                    </div>
                    <div class="elevator-space-on-floor ELEVATOR-ID-space " 
                        onclick="insideUserInterfaceButtonClicked(event)" data-floor-no="10" data-elevator-name="ELEVATOR-ID">
                    </div>
                </div>
            </section>`;
    elevatorEle.innerHTML = elevatorFixedTemplate.replaceAll("ELEVATOR-ID", elevatorName);
    return elevatorEle;
}

