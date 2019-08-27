<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
       <xsl:template match="/">
         <xsl:for-each select="SUMMARY/PRODUCT">
           Product ID : 
           <b><xsl:value-of select="@ID"/></b>
           <br/>
           Product Name : 
           <b>
             <xsl:value-of select="@NAME"/>
           </b> <br/> 
           Price : 
           <b>
             <xsl:value-of select="@PRICE"/>
           </b><br/><br/>
           <xsl:for-each select="ORDER">
             Order ID : 
             <xsl:value-of select="@ID"/> <br/>
             Shipping Address : 
             <xsl:value-of select="SHIP_ADD"/> <br/> 
             Quantity : 
             <xsl:value-of select="QUANTITY"/> <br/>
             <br/><br/>
             Order Bill Amount :
             <b>
               <xsl:value-of select='(../@PRICE) * 			(QUANTITY) '/>
             </b> <br/><br/>
           </xsl:for-each>
           <HR/>
           <B>
             PRODUCT SALES VALUE: <xsl:value-of select='(./@PRICE) * 	sum(./ORDER/QUANTITY)'/>
           </B>
           <BR/>
           <HR/>
           <BR/>
          <br/> <br/>
           <hr/>
         </xsl:for-each>
       </xsl:template>
</xsl:stylesheet>
