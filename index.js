

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
        td_dual_d.style = "background-color: green;"
        td_dual_u.style = "background-color: green;"
        td_dual_a.style = "background-color: green;"
        td_dual_l.style = "background-color: green;"
        td_dual_c.style = "background-color: green;"
        td_eprom_dual_o.style = "background-color: green;"
        td_dual_r.style = "background-color: green;"
        td_dual_adres_e.style = "background-color: green;"

        msg.innerHTML += "Palavra 1: DUALCORE<br>"
    }else{

        td_dual_d.style = "background-color: red;"
        td_dual_u.style = "background-color: red;"
        td_dual_a.style = "background-color: red;"
        td_dual_l.style = "background-color: red;"
        td_dual_c.style = "background-color: red;"
        td_eprom_dual_o.style = "background-color: red;"
        td_dual_r.style = "background-color: red;"
        td_dual_adres_e.style = "background-color: red;"


        console.log("erro na  quadcore")
    

    } 

    if (palavra7 == "EPROM"){

        td_massa_eprom_e.style = "background-color: green"
        td_eprom_p.style = "background-color: green"
        td_eprom_r.style = "background-color: green"
        td_eprom_dual_o.style = "background-color: green"
        td_eprom_m.style = "background-color: green"
        
        msg.innerHTML += "Palavra 2: EPROM <br>"
    }else{

        td_massa_eprom_e.style = "background-color: red"
        td_eprom_p.style = "background-color: red"
        td_eprom_r.style = "background-color: red"
        td_eprom_dual_o.style = "background-color: red"
        td_eprom_m.style = "background-color: red"
        
        console.log("erro na eprom")
    } 


    if(palavra15 == "REGISTRADORES"){

        td_regis_r_1.style = "background-color: green"
        td_regis_quad_e.style = "background-color: green"
        td_regis_g.style = "background-color: green"
        td_regis_i5_i.style = "background-color: green"
        td_regis_s.style = "background-color: green"
        td_regis_t.style = "background-color: green"
        td_regis_r.style = "background-color: green"
        td_regis_a.style = "background-color: green"
        td_regis_d.style = "background-color: green"
        td_regis_o.style = "background-color: green"
        td_regis_r_2.style = "background-color: green"
        td_regis_e.style = "background-color: green"
        td_regis_s.style = "background-color: green"
        


       
        msg.innerHTML += "Palavra 3: registradores <br>"
    }else{

        td_regis_r_1.style = "background-color: red"
        td_regis_quad_e.style = "background-color: red"
        td_regis_g.style = "background-color: red"
        td_regis_i5_i.style = "background-color: red"
        td_regis_s.style = "background-color: red"
        td_regis_t.style = "background-color: red"
        td_regis_r.style = "background-color: red"
        td_regis_a.style = "background-color: red"
        td_regis_d.style = "background-color: red"
        td_regis_o.style = "background-color: red"
        td_regis_r_2.style = "background-color: red"
        td_regis_e.style = "background-color: red"
        td_regis_s.style = "background-color: red"

        console.log("erro na registradores")
    }

    if(palavra4 == "CPU"){

        td_cpu_c.style = "background-color: green"
        td_cpu_p.style = "background-color: green"
        td_cpu_ula_u.style = "background-color: green"

        
        msg.innerHTML += "Palavra 4: CPU <br>"
    }else{

        td_cpu_c.style = "background-color: red"
        td_cpu_p.style = "background-color: red"
        td_cpu_ula_u.style = "background-color: red"
       
        console.log("erro na CPU")
    }

    if(palavra8 == "QUADCORE"){

        td_quad_q.style =  "background-color: green"
        td_quad_u.style =  "background-color: green"
        td_data_quad_a.style = "background-color: green"
        td_quad_d.style = "background-color: green"
        td_quad_c.style = "background-color: green"
        td_rom_quad_o.style = "background-color: green"
        td_quad_r.style = "background-color: green"
        td_regis_quad_e.style = "background-color: green" 

     
        msg.innerHTML += "Palavra 5: QUADCORE <br>"
    }else{

        td_quad_q.style =  "background-color: red"
        td_quad_u.style =  "background-color: red"
        td_data_quad_a.style = "background-color: red"
        td_quad_d.style = "background-color: red"
        td_quad_c.style = "background-color: red"
        td_rom_quad_o.style = "background-color: red"
        td_quad_r.style = "background-color: red"
        td_regis_quad_e.style = "background-color: red" 

        console.log("erro na QUADCORE <br>")
    }

    if(palavra9 == "CS"){
      
        td_cs_c.style = "background-color: green" 
        td_regis_cs_s.style = "background-color: green" 

        msg.innerHTML += "Palavra 6: CS <br>"
    }else{

        td_cs_c.style = "background-color: red" 
        td_regis_cs_s.style = "background-color: red" 

        console.log("erro na cs")
    }

    if(palavra16 == "I5"){

        td_regis_i5_i.style = "background-color: green"
        td_i5_5.style =  "background-color: green" 

        
        msg.innerHTML += "Palavra 7: i5 <br>"
    }else{
        
        td_regis_i5_i.style = "background-color: red"
        td_i5_5.style =  "background-color: red" 
        console.log("erro no i5")
    }

    if(palavra12 == "DATABUS"){

        td_data_d.style = "background-color: green"
        td_data_quad_a.style = "background-color: green"
        td_data_t.style = "background-color: green"
        td_data_ram_a.style = "background-color: green"
        td_data_b.style = "background-color: green"
        td_data_u.style = "background-color: green"
        td_data_massa_s.style = "background-color: green"

        
        msg.innerHTML += "Palavra 8: databus<br>"
    }else{

        td_data_d.style = "background-color: red"
        td_data_quad_a.style = "background-color: red"
        td_data_t.style = "background-color: red"
        td_data_ram_a.style = "background-color: red"
        td_data_b.style = "background-color: red"
        td_data_u.style = "background-color: red"
        td_data_massa_s.style = "background-color: red"

        console.log("erro no databus")
    }

    if(palavra1 == "MEMORIADEMASSA"){

        td_massa_m.style = "background-color: green"
        td_massa_e.style = "background-color: green"
        td_dma_massa_m.style = "background-color: green"
        td_massa_o.style= "background-color: green"
        td_massa_r.style= "background-color: green"
        td_massa_i7_i.style = "background-color: green"
        td_massa_ula_a.style = "background-color: green"
        td_massa_d.style = "background-color: green"
        td_massa_e.style = "background-color: green"
        td_massa_m_3.style = "background-color: green"
        td_massa_adres_a.style = "background-color: green"
        td_data_massa_s.style = "background-color: green"
        td_massa_s.style = "background-color: green"
        td_flash_massa_a.style = "background-color: green"
        

        
        msg.innerHTML += "Palavra 9: memória de massa<br>"
    }else{

        td_massa_m.style = "background-color: red"
        td_massa_e.style = "background-color: red"
        td_dma_massa_m.style = "background-color: red"
        td_massa_o.style= "background-color: red"
        td_massa_r.style= "background-color: red"
        td_massa_i7_i.style = "background-color: red"
        td_massa_ula_a.style = "background-color: red"
        td_massa_d.style = "background-color: red"
        td_massa_e.style = "background-color: red"
        td_massa_m_3.style = "background-color: red"
        td_massa_adres_a.style = "background-color: red"
        td_data_massa_s.style = "background-color: red"
        td_massa_s.style = "background-color: red"
        td_flash_massa_a.style = "background-color: red"
       


        console.log("erro na memoria de massa")
    }

    if(palavra5 == "I7"){
        
        msg.innerHTML += "Palavra 10: i7 <br>"

        td_massa_i7_i.style = "background-color: green"
        td_I7_7.style = "background-color: green"
        
    }else{
        td_massa_i7_i.style = "background-color: red"
        td_I7_7.style = "background-color: red"
        console.log("erro no i7")
    }

    if(palavra2 == "DMA"){

        td_dma_d.style = "background-color: green"
        td_dma_massa_m.style = "background-color: green"
        td_dma_a.style = "background-color: green"
        
        msg.innerHTML += "Palavra 11: dma <br>"
    }else{
        
        td_dma_d.style = "background-color: red"
        td_dma_massa_m.style = "background-color: red"
        td_dma_a.style = "background-color: red"

        console.log("erro na dma")
    }

    if(palavra10 == "RAM"){
        
        td_ram_r.style = "background-color: green"
        td_data_ram_a.style = "background-color: green"
        td_ram_m.style = "background-color: green"


        msg.innerHTML += "Palavra 12: ram <br>"
    } else {

        td_ram_r.style = "background-color: red"
        td_data_ram_a.style = "background-color: red"
        td_ram_m.style = "background-color: red"

        console.log("erro na ram")
    }

    if(palavra13 == "FLASH"){
        
        td_flash_f.style= "background-color: green"
        td_flash_l.style= "background-color: green"
        td_flash_massa_a.style =  "background-color: green"
        td_flash_s.style = "background-color: green"
        td_flash_h.style = "background-color: green"



        msg.innerHTML += "Palavra 13: flash <br>"
    }else{

        td_flash_f.style= "background-color: red"
        td_flash_l.style= "background-color: red"
        td_flash_massa_a.style = "background-color: red"
        td_flash_s.style = "background-color: red"
        td_flash_h.style = "background-color: red"
        console.log("erro na flash")
    }

    if(palavra11 == "ADRESBUSS"){

        td_massa_adres_a.style = "background-color: green"
        td_adres_d.style =  "background-color: green"
        td_adres_r.style = "background-color: green"
        td_dual_adres_e.style = "background-color: green"
        td_adres_s_1.style = "background-color: green"
        td_adres_b.style = "background-color: green"
        td_adres_u.style = "background-color: green"
        td_adres_s_2.style = "background-color: green"
        td_adres_s_3.style = "background-color: green"





        
        msg.innerHTML += "Palavra 14: adresbuss <br>"
    }else{

        td_massa_adres_a.style = "background-color: red"
        td_adres_d.style =  "background-color: red"
        td_adres_r.style = "background-color: red"
        td_dual_adres_e.style = "background-color: red"
        td_adres_s_1.style = "background-color: red"
        td_adres_b.style = "background-color: red"
        td_adres_u.style = "background-color: red"
        td_adres_s_2.style = "background-color: red"
        td_adres_s_3.style = "background-color: red"


        console.log("erro na adresbuss")
    }

    if(palavra14 == "ROM"){
        td_rom_r.style = "background-color: green"
        td_rom_quad_o.style = "background-color: green"
        td_rom_quad_m.style = "background-color: green"


        msg.innerHTML += "Palavra 15: rom <br>"
    }else{

        td_rom_r.style = "background-color: red"
        td_rom_quad_o.style = "background-color: red"
        td_rom_quad_m.style = "background-color: red"
        

       
        console.log("erro na rom")
    }

    if(palavra6 == "ULA"){
        td_cpu_ula_u.style = "background-color: green"
        td_ula_l.style = "background-color: green"
        td_massa_ula_a.style  = "background-color: green"
       
        msg.innerHTML += "Palavra 16: ula <br>"
      
    }else{

        td_cpu_ula_u.style = "background-color: red"
        td_ula_l.style = "background-color: red"
        td_massa_ula_a.style  = "background-color: red"
        

        console.log("erro na ula")
    }
    

}


function validacao_correta() {

   
    
}

function validacao_incorreta() {

    



}   