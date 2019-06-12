<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <table border="3">
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    <xsl:for-each select="PRODUCTDATA/PRODUCT">
      <xsl:sort select="@PRODID" order="descending"/>
      <tr>
        <td>
          <xsl:value-of select="@PRODID"/>
        </td>
        <td>
          <xsl:value-of select="PRODUCTNAME"/>
        </td>
        <td>
          <xsl:value-of select="PRICE"/>
        </td>
        <td>
          <xsl:value-of select="QUANTITY"/>
        </td>
      </tr>
    </xsl:for-each>
    </table>
  </xsl:template>
</xsl:stylesheet>
