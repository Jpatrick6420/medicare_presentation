
let action=0;

const medicareB = document.querySelector(".medicare_b")

const medicareList = document.querySelector(".original_medicare_list")

const prevBtn = document.querySelector("#prev_btn")
const nextBtn = document.querySelector("#next_btn")

const supplementalSection = document.querySelector("#supplemental_plan")

const advantagePlan = document.querySelector("#advantage_plan")

const proConSupplements= document.querySelector("#pro_con_lists_for_supplements")

const proConAdvantage= document.querySelector("#pro_con_lists_for_advantage")

function showOriginalMedicare (){
    medicareB.classList.toggle("translate_up")
    medicareList.classList.toggle("translate_left")

}
function showProConSupplemental (){
    proConSupplements.classList.toggle("none");
    proConSupplements.classList.toggle("block");

}

function showProConAdvantage (){
    proConAdvantage.classList.toggle("none")
    proConAdvantage.classList.toggle("block")

}



function showSupplemental (){
    supplementalSection.classList.toggle("none")
    supplementalSection.classList.toggle("block")

}

function showAdvantage (){
    advantagePlan.classList.toggle("block")
    advantagePlan.classList.toggle("none")
}




const actions=[showOriginalMedicare, showSupplemental,showProConSupplemental,showAdvantage, showProConAdvantage]

nextBtn.addEventListener("click", function(){

    actions[action]()
    if (action < actions.length){
        action++;}

})

prevBtn.addEventListener("click", function(){
    if(action >0){
        --action;
        actions[action]()
    }




})