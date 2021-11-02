

function cruzadinha(){
    msg.innerHTML = ''
    var palavra1 = (td_massa_m.value + td_massa_e.value + td_dma_massa_m.value + td_massa_o.value + td_massa_r.value + td_massa_i7_i.value + td_massa_ula_a.value + td_massa_d.value + td_massa_e.value + td_massa_m_3.value + td_massa_adres_a.value + td_data_massa_s.value + td_massa_s.value + td_flash_massa_a.value).toUpperCase();
    var palavra2 = (td_dma_d.value + td_dma_massa_m.value + td_dma_a.value).toUpperCase();
    var palavra3 = (td_dual_d.value + td_dual_u.value + td_dual_a.value + td_dual_l.value + td_dual_c.value + td_eprom_dual_o.value + td_dual_r.value + td_dual_adres_e.value).toUpperCase();
    var palavra4 = (td_cpu_c.value + td_cpu_p.value + td_cpu_ula_u.value).toUpperCase();
    var palavra5 = (td_massa_i7_i.value + td_I7_7.value).toUpperCase();
    var palavra6 = (td_cpu_ula_u.value + td_ula_l.value + td_massa_ula_a.value ).toUpperCase();
    var palavra7 = (td_massa_eprom_e.value + td_eprom_p.value + td_eprom_r.value + td_eprom_dual_o.value + td_eprom_m.value).toUpperCase();
    var palavra8 = (td_quad_q.value + td_quad_u.value + td_data_quad_a.value + td_quad_d.value + td_quad_c.value + td_rom_quad_o.value + td_quad_r.value + td_regis_quad_e.value).toUpperCase();
    var palavra9 = (td_cs_c.value + td_regis_cs_s.value).toUpperCase();
    var palavra10 = (td_ram_r.value + td_data_ram_a.value + td_ram_m.value).toUpperCase();
    var palavra11 = (td_massa_adres_a.value + td_adres_d.value + td_adres_r.value + td_dual_adres_e.value + td_adres_s_1.value + td_adres_b.value + td_adres_u.value + td_adres_s_2.value + td_adres_s_3.value ).toUpperCase();
    var palavra12 = (td_data_d.value + td_data_quad_a.value + td_data_t.value + td_data_ram_a.value + td_data_b.value + td_data_u.value + td_data_massa_s.value).toUpperCase();
    var palavra13 = (td_flash_f.value + td_flash_l.value + td_flash_massa_a.value + td_flash_s.value + td_flash_h.value).toUpperCase();
    var palavra14 = (td_rom_r.value + td_rom_quad_o.value + td_rom_quad_m.value).toUpperCase();
    var palavra15 = (td_regis_r_1.value + td_regis_quad_e.value + td_regis_g.value + td_regis_i5_i.value  + td_regis_s.value  + td_regis_t.value  + td_regis_r.value  + td_regis_a.value  + td_regis_d.value  + td_regis_o.value  + td_regis_r_2.value  + td_regis_e.value  + td_regis_s.value ).toUpperCase();
    var palavra16 = (td_regis_i5_i.value + td_i5_5.value).toUpperCase();
   // ok
    
    if (palavra3 == "DUALCORE"){

        msg.innerHTML += "Palavra 1: DUALCORE<br>"
    }else{
        console.log("erro na  quadcore")

    } 

    if (palavra7 == "EPROM"){
        msg.innerHTML += "Palavra 2: EPROM <br>"
    }else{
        console.log("erro na eprom")
    } 


    if(palavra15 == "REGISTRADORES"){
        msg.innerHTML += "Palavra 3: registradores <br>"
    }else{
        console.log("erro na registradores")
    }

    if(palavra4 == "CPU"){
        validacao_correta()
        msg.innerHTML += "Palavra 4: CPU <br>"
    }else{
        validacao_incorreta()
        console.log("erro na CPU")
    }

    if(palavra8 == "QUADCORE"){
        msg.innerHTML += "Palavra 5: QUADCORE <br>"
    }else{
        console.log("erro na QUADCORE <br>")
    }

    if(palavra9 == "CS"){
        msg.innerHTML += "Palavra 6: CS <br>"
    }else{
        console.log("erro na cs")
    }

    if(palavra16 == "I5"){
        msg.innerHTML += "Palavra 7: i5 <br>"
    }else{
        console.log("erro no i5")
    }

    if(palavra12 == "DATABUS"){
        msg.innerHTML += "Palavra 8: databus<br>"
    }else{
        console.log("erro no databus")
    }

    if(palavra1 == "MEMORIADEMASSA"){
        msg.innerHTML += "Palavra 9: memória de massa<br>"
    }else{
        console.log("erro na memoria de massa")
    }

    if(palavra5 == "I7"){
        msg.innerHTML += "Palavra 10: i7 <br>"
    }else{
        console.log("erro no i7")
    }

    if(palavra2 == "DMA"){
        msg.innerHTML += "Palavra 11: dma <br>"
    }else{
        console.log("erro na dma")
    }

    if(palavra10 == "RAM"){
        msg.innerHTML += "Palavra 12: ram <br>"
    } else {
        console.log("erro na ram")
    }

    if(palavra13 == "FLASH"){
        msg.innerHTML += "Palavra 13: flash <br>"
    }else{
        console.log("erro na flash")
    }

    if(palavra11 == "ADRESBUSS"){
        msg.innerHTML += "Palavra 14: adresbuss <br>"
    }else{
        console.log("erro na adresbuss")
    }

    if(palavra14 == "ROM"){
        validacao_correta()
        msg.innerHTML += "Palavra 15: rom <br>"
    }else{

        validacao_incorreta()
        console.log("erro na rom")
    }

    if(palavra6 == "ULA"){
        msg.innerHTML += "Palavra 16: ula <br>"
    }else{
        console.log("erro na ula")
    }
    

}


function validacao_correta() {
    
  
    
}

function validacao_incorreta() {

  

}   