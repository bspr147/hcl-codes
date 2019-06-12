<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <xsl:for-each select="PRODUCTDATA/PRODUCT">
      <xsl:choose>
        <xsl:when test="PRICE[. &gt; 50]">
          <font color="red">
            Product ID : 
            <xsl:value-of select="@PRODID"/> <br/>
            Product Name
            <xsl:value-of select="PRODUCTNAME"/> <br/>
            Price 
            <xsl:value-of select="PRICE"/> <br/>
            Description
            <xsl:value-of select="DESCRIPTION"/> <br/>
            <hr/>
          </font>
        </xsl:when>
        <xsl:otherwise>
          <font color="green">
            Product ID :
            <xsl:value-of select="@PRODID"/> <br/>
            Product Name
            <xsl:value-of select="PRODUCTNAME"/> <br/>
            Price
            <xsl:value-of select="PRICE"/> <br/>
            Description
            <xsl:value-of select="DESCRIPTION"/> <br/>
            <hr/>
          </font>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:for-each>
  </xsl:template>
  
</xsl:stylesheet>
